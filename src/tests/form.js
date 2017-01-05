import 'universal-fetch'
import React from 'react'
import chai, {expect, assert} from 'chai'
import chaiAsPromised from 'chai-as-promised'
import {shallow} from 'enzyme'

chai.use(chaiAsPromised)

const Form = require('../components/form').default

describe('Form', ()=>{
  describe('Autocomplete', ()=>{
    const autocomplete = shallow(
      <Form.Autocomplete
        handleSelectItem={val => console.log('You have selected', val)}
        inputPlaceholder={'Placeholder'}
        allowCustomText={false}
        suggestions={['sug1','sug2']}
      />
    )
    // Can't find input for some reason...

    // console.log(autocomplete.html())
    // it('should render an input', function () {
    //   expect(autocomplete.find('input[type="text"]'). ).to.equal(1)
    // })
  })
})
