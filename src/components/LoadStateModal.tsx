import "../styles/LoadStateModal.scss";

type LoadStateModalProps = {
  isOpen: boolean;
};

function LoadStateModal({ isOpen }: LoadStateModalProps) {
  if(isOpen) {
    return (
      <div className="loadStateModal">
        <div id="load-content">

        </div>
      </div>
    )
  }
};

export default LoadStateModal;
