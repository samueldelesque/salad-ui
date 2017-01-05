import 'universal-fetch'
import React from 'react'
import chai, {expect, assert} from 'chai'
import chaiAsPromised from 'chai-as-promised'
import {shallow} from 'enzyme'

import Chart from '../components/chart/chart'

chai.use(chaiAsPromised)

describe('Area', function () {
  const area = shallow(
    <Chart.Area
      width={900}
      height={300}
      showFirstAndLastTip={true}
      labelTemplate={data=>`Cats ate ${data.value} fish that day.`}
      data={[
        {time: new Date('2010-01-01'), value: 3},
        {time: new Date('2010-01-02'), value: 5},
        {time: new Date('2010-01-03'), value: 2},
        {time: new Date('2010-01-04'), value: 6},
      ]}
    />
  )
  it('N .tip-text-date (if showFirstAndLastTip = true)', function () {
    expect(area.find('.tip-text-date').length).to.equal(4)
  })
  it('Should have 1 line', function () {
    expect(area.find('polyline').length).to.equal(1)
  })
})

describe('CirclePie', function () {
  const pie = shallow(
    <Chart.CirclePie
      width={100}
      height={100}
      strokeWidth={7}
      percent={42}
      strokeColor="rgb(31, 207, 101)"
      fillColor="rgb(31, 207, 101)"
    />
  )
  it('Text should be %', function () {
    expect(pie.find('text').text()).to.equal('42%')
  })
})
