import React from 'react';
import classes from './List.module.css'
import { NavLink } from 'react-router-dom';


export const ListOfDisciplines = (props) => {

   console.log(props);
   return (
      <div key={props.ListOfDisciplinesPage.id}>
         <div className={classes.container}></div>
         <div id="card-big" class={classes.card_big}>
            <div className={classes.card_big__main}>
               <div className={classes.card_big__img}></div>
               <div className={classes.card_big__descr}>
                  <div className={classes.card_big__descr_block}>{props.ListOfDisciplines.militaryRank}</div>
                  <div className={classes.card_big__descr_block}>{props.ListOfDisciplines.firstName}</div>
                  <div className={classes.card_big__descr_block}>{props.ListOfDisciplines.middleName}</div>
                  <div className={classes.card_big__descr_block}>{props.ListOfDisciplines.lastName}</div>
                  <div className={classes.card_big__descr_block}>{props.ListOfDisciplines.position}</div>
                  <div className={classes.card_big__descr_block}>{props.ListOfDisciplines.academicDegree}</div>
                  <div className={classes.card_big__descr_block}>{props.ListOfDisciplines.isMarried}</div>
               </div>
            </div>
            <div className={classes.card_big__info}>{props.ListOfDisciplines.info}</div>
            <div className={classes.card_big__footer}>
               <div className={classes.card_big__footer_img}></div>
               <div className={classes.card_big__footer_other}>
                  <div className={classes.card_big__footer_subject}>АЛВС</div>
                  <div className={classes.card_big__footer_specialty}>САФ</div>
               </div>
               <div className={classes.card_big__footer_descr}>sfsdfsdfsdfdsfsdf</div>
            </div>
         </div>
         <NavLink to={'/ListOfDisciplines'} id="bigCardClose" className={classes.card_big__close}>Вернуться</NavLink>
      </div>
   );

}