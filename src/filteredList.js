import React, { useMemo } from "react";

export function FilteredList({list}){
  const filteredList = useMemo(
    () => list.filter((user) => user.age > 18),
    [list]
  );

  return (
    <ul>
      {filteredList.map((user) => (
        <li key={user.id}>
          Username: {user.name}, Age: ({user.age})
        </li>
      ))}
    </ul>
  );
}