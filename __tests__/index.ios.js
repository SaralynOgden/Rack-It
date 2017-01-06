import 'react-native';
import React from 'react';
import Description from '../ios/components/Description.js';

describe('description', () => {
  const thefts = [
      {
        "_id" : "585d727e23a74420cc51b16c",
        "occurred_date_range_end" : "2016-08-28T09:00:00.000",
        "city" : "Seattle",
        "occurred_date_range_start" : "2016-08-27T22:00:00.000",
        "location" : {
          "type" : "Point",
          "coordinates" : [-122.324203491, 47.667877197]
        }
      }, {
        "_id" : "585d727e23a74420cc51b15f",
      	"occurred_date_range_end" : "2016-10-17T17:00:00.000",
      	"city" : "Seattle",
      	"occurred_date_range_start" : "2016-10-17T08:00:00.000",
      	"location" : {
      		"type" : "Point",
      		"coordinates" : [-122.309120178, 47.651302338]
      	}
      }, {
      	"_id" : "585d727e23a74420cc51b160",
      	"occurred_date_range_end" : "2016-10-29T07:00:00.000",
      	"city" : "Seattle",
      	"occurred_date_range_start" : "2016-10-28T23:00:00.000",
      	"location" : {
      		"type" : "Point",
      		"coordinates" : [-122.32888031, 47.630302429]
      	}
      }, {
      	"_id" : "585d727e23a74420cc51b161",
      	"city" : "Seattle",
      	"occurred_date_range_start" : "2016-10-05T16:49:00.000",
      	"location" : {
      		"type" : "Point",
      		"coordinates" : [-122.325904846, 47.617736816]
      	}
      }, {
      	"_id" : "585d727e23a74420cc51b162",
      	"occurred_date_range_end" : "2016-10-10T16:00:00.000",
      	"city" : "Seattle",
      	"occurred_date_range_start" : "2016-10-08T10:00:00.000",
      	"location" : {
      		"type" : "Point",
      		"coordinates" : [-122.309494019, 47.6158638]
      	}
      }, {
      	"_id" : "585d727e23a74420cc51b163",
      	"occurred_date_range_end" : "2016-09-09T15:10:00.000",
      	"city" : "Seattle",
      	"occurred_date_range_start" : "2016-09-01T15:10:00.000",
      	"location" : {
      		"type" : "Point",
      		"coordinates" : [-122.357223511, 47.541004181]
      	}
      }, {
      	"_id" : "585d727e23a74420cc51b164",
      	"city" : "Seattle",
      	"occurred_date_range_start" : "2016-10-27T03:40:00.000",
      	"location" : {
      		"type" : "Point",
      		"coordinates" : [-122.301300049, 47.587596893]
      	}
      }, {
      	"_id" : "585d727e23a74420cc51b165",
      	"occurred_date_range_end" : "2016-10-29T20:05:00.000",
      	"city" : "Seattle",
      	"occurred_date_range_start" : "2016-10-29T20:00:00.000",
      	"location" : {
      		"type" : "Point",
      		"coordinates" : [-122.398338318, 47.639556885]
      	}
      }, {
      	"_id" : "585d727e23a74420cc51b166",
      	"city" : "Seattle",
      	"occurred_date_range_start" : "2016-12-30T16:10:00.000",
      	"location" : {
      		"type" : "Point",
      		"coordinates" : [-122.376808167, 47.690605164]
      	}
      }
    ];
  it ('responds correctly with no thefts', () => {
    expect(new Description({thefts:[]}).getMostRecentTheft([])).toBe('N/A');
  })
  it ('one theft that occurred in a time range', () => {
    expect(new Description({ thefts: [thefts[0]] })
              .getMostRecentTheft([thefts[0]]))
              .toBe('between August 27th 2016, 10pm and August 28th 2016, 9am');
  })
  it ('one theft that occurred in a time range', () => {
    expect(new Description({ thefts: [thefts[0]] })
              .getMostRecentTheft([thefts[0]]))
              .toBe('between August 27th 2016, 10pm and August 28th 2016, 9am');
  })
  it ('one theft that occured at a specific time', () => {
    expect(new Description({ thefts: [thefts[3]] })
               .getMostRecentTheft([thefts[3]]))
               .toBe('October 5th 2016, 4pm');
  })
  it ('many thefts with the most recent occuring at a specific time', () => {
    expect(new Description({ thefts })
               .getMostRecentTheft(thefts))
               .toBe('December 30th 2016, 4pm');
  })
  it ('many thefts with the most recent occuring in a time range', () => {
    const shorterTheftArr = thefts.splice(0, 4);
    expect(new Description({ shorterTheftArr })
               .getMostRecentTheft(shorterTheftArr))
               .toBe('between October 28th 2016, 11pm and October 29th 2016, 7am');
  })
})
