/** @format */

import {
  regularUnits as rgM,
  infoCareer as iM,
  optionalUnits as otM,
} from "./mecatronica/learningUnits";

import {
  regularUnits as rgT,
  infoCareer as iT,
  optionalUnits as otT,
} from "./telematica/learningUnits";

import {
  regularUnits as rgB,
  infoCareer as iB,
  optionalUnits as otB,
} from "./bionica/learningUnits";

export const Careers = {
  mecatronica: rgM,
  telematica: rgT,
  bionica: rgB,
};

export const optCareers = {
  mecatronica: otM,
  telematica: otT,
  bionica: otB,
};

export const infoCareer = { mecatronica: iM, telematica: iT, bionica: iB };

