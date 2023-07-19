import * as S from "./ModalStyledComponents";

function Modal({ setShowmodal }) {
  return (
    <S.ModalWrapper>
      <S.Warn>
        Stay Tuned for
        <br />
        More Korean Food Prices
      </S.Warn>
      <S.Description>
        Our team is working hard
        <br />
        to expand our range of dishes.
      </S.Description>
      <S.XModal
        src="/img/xmodal.png"
        alt="모달창 끄는 버튼"
        onClick={() => {
          setShowmodal(false);
        }}
      />
    </S.ModalWrapper>
  );
}

export default Modal;
