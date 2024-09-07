const style = {
  backgroundColor: '#c6e5d9',
  width: '400px',
  height: '30px',
  padding: '8px',
  margin: '8px',
  borderRadius: '8px',
};

export const AddTodo = ({
  todoText,
  onChangeTodoText,
  onClickAdd,
  disabled,
}) => {
  return (
    <div style={style}>
      <input
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChangeTodoText}
        disabled={disabled}
      />
      <button disabled={disabled} onClick={onClickAdd}>
        追加
      </button>
    </div>
  );
};
