import React from 'react';
import { shallow } from 'enzyme';
import ExampleWork,  {ExampleWorkBubble} from '../js/example-work';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

const myWork = [
{
  'title': "Proposals",
  'image': {
  	'desc': "Screenshot of proposal tool",
  	'src': "images/example1.png",
  	'comment': ""
  }	
},
{
  'title': "Work Example2",
  'image': {
  	'desc': "Example screenshot2",
  	'src': "images/example2.png",
  	'comment': ""
  }	
},
{
  'title': "work Example3",
  'image': {
  	'desc': "Example screenshot3",
  	'src': "images/example3.png",
  	'comment': ""
  }	
}


]

describe ("ExampleWork component", () => {

  let component = shallow(<ExampleWork work={myWork}/>);

	it("should be a span element", () => {
		expect(component.type()).toEqual('span');
	});

	it("should have as many bubble as work examples", () =>{
		expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length);
	});

  it("should allow the modal to open and close",() =>{
    component.instance().openModal();
    expect(component.instance().state.modalOpen).toBe(true);
    component.instance().closeModal();
    expect(component.instance().state.modalOpen).toBe(false);
  })
});

describe ("ExampleWorkBubble component", () => {
  let mockOpenModalFn = jest.fn();
	let component = shallow(<ExampleWorkBubble example = {myWork[1]} openModal={mockOpenModalFn} />);
	let images = component.find("img");

	it("Should contain a single image element", () => {
		expect(images.length).toEqual(1);
	});

	it("Should have the image source set correclty", () => {
		expect(images.prop('src')).toEqual(myWork[1].image.src);
	});

  it("Should call the openModal handler when clicked", ()=>{
    component.find(".section__exampleWrapper").simulate('click');
    expect(mockOpenModalFn).toHaveBeenCalled();
  });
});
