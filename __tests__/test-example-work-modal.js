import React from 'react';
import { shallow } from 'enzyme';
import ExampleWorkModal from '../js/example-work-modal';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter()});

const myExample = {
  'title': "Proposals",
  'href': "https://example.com",
  'github': "https://example.com",
  'desc': "lorem ipsim dolor sit amet",
  'image': {
  	'desc': "Screenshot of proposal tool",
  	'src': "images/example1.png",
  	'comment': ""
  }	

};

describe("ExampleWorkModal component", () => {
	let component = shallow(<ExampleWorkModal example={myExample} open={false} />);
	let openComponent = shallow(<ExampleWorkModal example={myExample} open={true} />);

	let anchors = component.find("a");

	it("Should contain two 'a' element", () => {
		expect(anchors.length).toEqual(2);
	});

	it("Should link to our project", () => {
		expect(anchors.first().prop('href')).toEqual(myExample.href);
	});

	it("Should link to our Github", () => {
		expect(anchors.at(1).prop('href')).toEqual(myExample.github);
	});

	it("Should have the modal class set correctly", () =>{
		expect(component.find(".background--grey").hasClass("modal--closed")).toBe(true);
		expect(openComponent.find(".background--grey").hasClass("modal--open")).toBe(true);
	})
});