import React from "react";

class ModalEditPhoto extends React.Component {
  state = {
    modalOpen: false
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Edit</button>
        <div
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          contentLabel="Edit Photo"
        >
          <h2>Edit Photo</h2>
          <form>
            <input type="text" placeholder="Photo Name" />
            <input type="text" placeholder="Photo URL" />
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    )

  }
}