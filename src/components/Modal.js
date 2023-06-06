import {
  Description,
  ModalWrapper,
  Warn,
} from "../styles/ModalStyledComponents";

function Modal({ setShowmodal }) {
  return (
    <ModalWrapper>
      <Warn>
        Stay Tuned for
        <br />
        More Korean Food Prices
      </Warn>
      <Description>
        Our team is working hard
        <br />
        to expand our range of dishes.
      </Description>
      <img
        src="/img/xmodal.png"
        alt="모달창 끄는 버튼"
        onClick={() => {
          setShowmodal(false);
        }}
      />
    </ModalWrapper>
  );
}

export default Modal;
