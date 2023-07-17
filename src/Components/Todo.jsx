import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { deleteTodo, markDone, editTodoText } from "services/actions/todo";
import {
  ICON_DELETE,
  ICON_CHECK,
  ICON_EDIT,
  ALT_TEXT_DELETE,
  ALT_TEXT_CHECK,
  ALT_TEXT_EDIT,
} from "Common/constants";
import { formatDate } from "Helpers/dateTimeUtils";
import ImageButton from "Components/ImageButton";
import CompletedInMessage from "Components/CompletedInMessage";

export default function Todo({ id, text, createdAt, isCompleted, completedIn }) {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const handleDone = () => {
    dispatch(markDone(id));
  };

  const handleEdit = () => {
      setEditMode(true);
  };

  const handleInputChange = (event) => {
    setEditedText(event.target.value);
  };

  const handleSave = () => {
    setEditMode(false);
    dispatch(editTodoText(id, editedText));
  };

  const handleCancelEdit= () => {
    setEditMode(false);
    setEditedText(text);
  };

  return (
    <Fragment>
      {editMode ? (
        <div>
          <input
            type="text"
            value={editedText}
            onChange={handleInputChange}
          />
        </div>
      ) : (
        <h1 style={isCompleted ? { textDecoration: "line-through", color: "green" } : {}}>
          {text}
        </h1>
      )}
      <p>
        <strong>Created at: {formatDate(createdAt)}</strong>
      </p>
      {editMode && <button onClick={handleSave}>Save</button>}
      <ImageButton
        src={ICON_CHECK}
        alt={ALT_TEXT_CHECK}
        onClick={handleDone}
        hide={isCompleted}
      />
      {!editMode && (
        <ImageButton
          src={ICON_EDIT}
          alt={ALT_TEXT_EDIT}
          onClick={handleEdit}
          hide={isCompleted}
        />
      )}
      <ImageButton
        src={ICON_DELETE}
        alt={ALT_TEXT_DELETE}
        onClick={editMode ? handleCancelEdit : handleDelete}
      />
      {completedIn && <CompletedInMessage completedIn={completedIn} />}
    </Fragment>
  );
}

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  createdAt: PropTypes.instanceOf(Date).isRequired,
  isCompleted: PropTypes.bool.isRequired,
  completedIn: PropTypes.string,
};
