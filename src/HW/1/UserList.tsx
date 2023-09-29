type AddressType = {
  street: string, // ПОДПРАВЛЯЕМ any
  city: string // ПОДПРАВЛЯЕМ any
};

type UserType = {
  id:number,
  name:string,
  age:number,
  address:AddressType,
  // ПРИДЕТСЯ САМОМУ)
};

type UserListPropsType = {
  users: Array<UserType>; // ПО МОЕМУ ЧЕГО-ТО НЕ ХВАТАЕТ...
};

export const UserList = (props: UserListPropsType) => {
  return (
    <div id={'hw01-users'}>
      <h2>User List:</h2>

      <ul>
        {props.users.map((s) => ( // ВСЕ ТОВАРЫ В СТРАНУ ПРИЕЗЖАЮТ В КОНТЕЙНЕРАХ, А В РЕАКТЕ...
          <li key={s.id} id={`hw01-user-${s.id}`}>
            <strong>{s.name}</strong> (Age: {s.age})<strong> Address:</strong>
            {s.address.street}, {s.address.city}
          </li>
        ))}
      </ul>
    </div>
  );
};
