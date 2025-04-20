type StateModalProps = {
  isSaveState: boolean;
}

function StateModal({ isSaveState }: StateModalProps) {
  // Save State Modal.
  if(isSaveState) {
    return (
      <div className="stateModal">
        <section id="save-control">
          <button>+ <h2>New Save</h2></button>
        </section>
        <section id="save-data">

        </section>
      </div>
    )
  }

  // Load State Modal.
  return (
    <div className="stateModal">
      <section id="load-data">

      </section>
    </div>
  )

};


export default StateModal;
