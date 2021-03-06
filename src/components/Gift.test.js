import React from 'react';
import { shallow , mount} from 'enzyme';
import Gift from './Gift';
import App from './App';

describe('Gift', ()=>{
    const mockRemove = jest.fn();
    const id = 1;
    const props = { gift: { id}, removeGift: mockRemove};
   const gift = shallow(<Gift {...props} />);


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
   });
   describe('when clicking the `Remove Gift` button', ()=>{
       beforeEach(()=>{
           gift.find('.btn-remove').simulate('click');
       });

       it('causes the removeGift callback', ()=>{
           expect(mockRemove).toHaveBeenCalledWith(id);
       });



       });
});