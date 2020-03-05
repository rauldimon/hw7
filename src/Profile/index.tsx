import React from "react";
import style from "./style.module.scss";


interface Props {
  name:string,
  photo:string
}

const Profile = (props:Props) => {
  return (
    <div className={style.profileBlock}>
      <h2>Profile</h2>
      <div className={style.photoBlock}>
        <img alt="photos" src={props.photo} />
      </div>
      <h1>{props.name}</h1>
    </div>
  );
}

export default React.memo(Profile)