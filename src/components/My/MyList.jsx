import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./My.style";
import Modal from "../common/Modal";
import { Galmuri } from "../../css/Font";
import { BiTrash } from "react-icons/bi";
import {
  GetCreatingCharm,
  GetCreatedCharm,
  DeleteCharm,
} from "../../api/charm";
import { RequestGetUser } from "../../api/user";

import charm1 from "../../assets/images/Charm/mousecharm.png";
import charm2 from "../../assets/images/Charm/rabbitcharm.png";
import charm3 from "../../assets/images/Charm/squirrelcharm.png";
import charm4 from "../../assets/images/Charm/goatcharm.png";
import charm5 from "../../assets/images/Charm/monkeycharm.png";
import charm6 from "../../assets/images/Charm/birdcharm.png";

const MyList = ({ isDone }) => {
  const nav = useNavigate();
  const [doneArr, setDoneArr] = useState([]);
  const [creatingArr, setCreatingArr] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  const getArrays = () => {
    GetCreatingCharm().then(res => {
      setCreatingArr(res.data.data);
    });
    GetCreatedCharm().then(res => {
      setDoneArr(res.data.data);
    });
  };
  useEffect(() => {
    RequestGetUser().then(res => {
      if (res) setCurrentUser(res.data.data.id);
    });
    getArrays();
  }, []);

  const findById = fId => {
    if (isDone) {
      for (let i = 0; i < doneArr.length; i++) {
        if (fId === doneArr[i].id) return doneArr[i].title;
      }
    } else {
      for (let i = 0; i < creatingArr.length; i++) {
        if (fId === creatingArr[i].id) return creatingArr[i].title;
      }
    }
  };
  const src = [charm1, charm2, charm3, charm4, charm5, charm6];
  const imgSrc = string => {
    if (string === "MOUSE") return charm1;
    else if (string === "RABBIT") return charm2;
    else if (string === "SQUIRREL") return charm3;
    else if (string === "GOAT") return charm4;
    else if (string === "MONKEY") return charm5;
    else if (string === "BIRD") return charm6;
  };
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const preDelete = cId => {
    setDeleteId(cId);
    openModal();
  };
  const onButton = () => {
    DeleteCharm(deleteId)
      .then(res => {
        console.log(res.data);
        getArrays();
      })
      .catch(err => {
        console.log(err);
      });
    closeModal();
  };
  return (
    <>
      {isDone ? (
        doneArr.length === 0 ? (
          <Galmuri size="15px" weight="400" color="#3a3a3a" margin="30px 0 0 0">
            아직 완성된 부적이 없네요!
          </Galmuri>
        ) : (
          <>
            <S.FlexContainer>
              {doneArr &&
                doneArr.map(ch => {
                  return (
                    <S.CharmRect key={ch.id + ch.title}>
                      {isEditing ? (
                        <S.TrashRect onClick={() => preDelete(ch.id)}>
                          <BiTrash fill="#155726" size="18" />
                        </S.TrashRect>
                      ) : null}
                      <S.CharmImg
                        src={imgSrc(ch.image)}
                        onClick={() => nav(`/${currentUser}/charm_id/${ch.id}`)}
                      />
                      <Galmuri weight="400" size="12px" color="#4A4A4A">
                        {ch.title}
                      </Galmuri>
                    </S.CharmRect>
                  );
                })}
            </S.FlexContainer>
            <S.ButtonContainer>
              <S.DButton
                style={{ backgroundColor: isEditing ? "#F9D7CD" : "#ececec" }}
                onClick={() => {
                  setIsEditing(!isEditing);
                }}
              >
                <Galmuri weight="400" size="14px">
                  {isEditing ? "완료하기" : "삭제하기"}
                </Galmuri>
              </S.DButton>
            </S.ButtonContainer>
          </>
        )
      ) : creatingArr.length === 0 ? (
        <Galmuri size="15px" weight="400" color="#3a3a3a" margin="30px 0 0 0">
          아직 생성 중인 부적이 없네요!
        </Galmuri>
      ) : (
        <>
          <S.FlexContainer>
            {creatingArr &&
              creatingArr.map(ch => {
                return (
                  <S.CharmRect key={ch.id + ch.title}>
                    {isEditing ? (
                      <S.TrashRect onClick={() => preDelete(ch.id)}>
                        <BiTrash fill="#155726" size="18" />
                      </S.TrashRect>
                    ) : null}
                    <S.CharmImg
                      src={imgSrc(ch.image)}
                      onClick={() => nav(`/${currentUser}/charm_id/${ch.id}`)}
                    />
                    <Galmuri weight="400" size="12px" color="#4A4A4A">
                      {ch.title}
                    </Galmuri>
                  </S.CharmRect>
                );
              })}
          </S.FlexContainer>
          <S.ButtonContainer>
            <S.DButton
              style={{ backgroundColor: isEditing ? "#F9D7CD" : "#ececec" }}
              onClick={() => {
                setIsEditing(!isEditing);
              }}
            >
              <Galmuri weight="400" size="14px">
                {isEditing ? "완료하기" : "삭제하기"}
              </Galmuri>
            </S.DButton>
          </S.ButtonContainer>
        </>
      )}
      {isModalOpen ? (
        <Modal
          isModalOpen={isModalOpen}
          closer={closeModal}
          maintext={`삭제한 부적은 복구할 수 없습니다. \n 정말 '${findById(
            deleteId,
          )}' 부적을 삭제하시겠습니까?`}
          buttontext="삭제하기"
          onClick={onButton}
          height="200px"
        />
      ) : null}
    </>
  );
};

export default MyList;
