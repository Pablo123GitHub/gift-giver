import React from 'react';
import { shallow } from 'enzyme';
import Gift from './Gift';
import App from './App';

describe('Gift', ()=>{
   const gift = shallow(<Gift/>);

   it('renders properly', ()=>{
       expect(gift).toMatchSnapshot();
   });

   it('initializes a person and a present in `state`', ()=>{
       expect(gift.state()).toEqual({person: '', present: ''});
   });

   describe('when typing into the person input', ()=>{
       const person = 'Uncle';

       beforeEach(()=>{
           gift.find('.input-person').simulate('change', {target: {value : person}})
       });

       it('updates the person in `state`', ()=>{
           expect(gift.state().person).toEqual(person);
       });

   });

   describe('when typing into the presnet input', ()=>{

       const app = shallow(<App/>);
       const present = 'Golf Clubs';
       console.log("1", app)

       beforeEach(()=>{
           gift.find('.input-present').simulate('change', {
               target: { value : present }
           });
       });

       it('updates the present in our state', ()=>{
           expect(gift.state().present).toEqual(present);
       });

       // it('creates a Gift Component THIS TEST IS NOT WORKING', ()=>{
       //     let app = shallow(<App/>);
       //     expect(app.find('Gift').exists()).toBe(true);
       // });






   });
});