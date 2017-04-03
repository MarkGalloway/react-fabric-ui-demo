/* @flow */
import moment from 'moment';
import data from './appraisals.json';
import { uniqueID } from './utils';

// Mock Api server delay
const delay = 0;

// TODO: Add type for Appraisal
type Appraisal = Object;
type Appraisals = Array<Appraisal>;

let appraisals: Appraisals = data.appraisals;

export class AppraisalsApi {

  static getAll(): Promise<Appraisals> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([...appraisals]);
      }, delay);
    });
  }

  static insertOne(data: Object): Promise<Appraisal> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const now = moment().valueOf();

        const appraisal: Appraisal = {
          ...data,
          id: uniqueID(),
          created: now,
          updated: now,
          cbb_status: "Incomplete",
          status: "needsNumbers"
        }

        appraisals = [...appraisals, appraisal];
        resolve({...appraisal});
      }, delay);
    });
  }

  static updateOne(appraisalId: number, data: Object): Promise<Appraisal> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const now = moment().valueOf();
        const index = appraisals.findIndex(appraisal =>
          appraisal.id === appraisalId
        );

        const appraisal: Appraisal = {
          ...appraisals[index],
          ...data,
          updated: now
        }

        appraisals.splice(index, 1, appraisal);
        resolve({...appraisal});
      }, delay);
    });
  }

  static deleteOne(appraisalId: number): Promise<any> {
    return new Promise((resolve, reject) => {
      const index = appraisals.findIndex(appraisal =>
        appraisal.id === appraisalId
      );
      appraisals.splice(index, 1);
      resolve();
    });
  }
};
