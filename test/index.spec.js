import { expect } from 'chai';
import fiscalCalculator from '../src';
import { throws } from 'assert';

describe('Fiscal expire day for 2019', () => {
	it('It should return day 2018-07-16 for 2018-1-10 ', () => {
		const expectedDay = '2018-07-16';

		expect(fiscalCalculator('2018-1-10')).equal(expectedDay);
	});

	it('It should return day 2018-07-16 for 2018-7-18 ', () => {
		const expectedDay = '2018-07-16';

		expect(fiscalCalculator('2018-7-13')).equal(expectedDay);
	});

	it('It should return day 2019-07-16 for 2018-7-18 ', () => {
		const expectedDay = '2019-07-16';

		expect(fiscalCalculator('2018-7-18')).equal(expectedDay);
	});

	it('It should return day 2019-07-16 for 2018-7-16 ', () => {
		const expectedDay = '2019-07-16';

		expect(fiscalCalculator('2018-7-16')).equal(expectedDay);
	});

	it('It should return day 2020-07-15 for 2019-12-10 ', () => {
		const expectedDay = '2020-07-15';

		expect(fiscalCalculator('2019-12-10')).equal(expectedDay);
  });
});

describe('Throw Error', () => {
  it('It should throw type error ', () => {
    expect(fiscalCalculator('12-12-10')).to.throw(TypeError);
  });
});