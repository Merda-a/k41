import React from 'react';
import classes from './List.module.css';
import { reduxForm, Field } from 'redux-form';
import { NavLink } from 'react-router-dom';
import { ListOfDisciplines } from './ListOfDisciplines';
import { Homework } from '../Homework/HomeClass';


export class ListClass extends React.Component {

   getListOfDisciplines(props) {
      let id = this.props.match.params.id;
      this.props.getUserbyId(id);
   }

   render() {
      return (
         <div>
            <ListReduxForm onSubmit={this.submit} role={this.props.user.ListClass} />
            <ListOfDisciplines {...this.props} />
            <Homework />
         </div>
      );
   }

}


const ListFormRedux = (props) => {

   return (
      <div>
         <NavLink to="/Homework" >Дисциплины кафедры</NavLink>
      </div>
   );
}

const ListReduxForm = reduxForm({
   form: 'group'
})(ListFormRedux)

