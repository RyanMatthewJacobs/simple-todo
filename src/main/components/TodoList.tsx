import { useState } from 'react';

import Item from './Item';

export default function TodoList() {
  const [items, setItems] = useState<string[]>([]);

  const onAddItem = () => {
    setItems([...items, 'new item']);
  };

  const listItems = items.map((item) => <Item data={item} />);

  return (
    <div className="todo-list">
      <ul>{listItems}</ul>
      <button type="button" onClick={onAddItem}>
        Add Item
      </button>
    </div>
  );
}
