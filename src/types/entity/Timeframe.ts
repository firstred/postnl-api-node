/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2017-2019 Michael Dekker
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 * associated documentation files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute,
 * sublicense, and/or sell copies of the Software, and to permit persons to whom the Software
 * is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or
 * substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
 * NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @author    Michael Dekker <git@michaeldekker.nl>
 *
 * @copyright 2017-2019 Michael Dekker
 *
 * @license   https://opensource.org/licenses/MIT The MIT License
 */
import { ITimeframeTimeFrame } from './TimeframeTimeFrame';

export interface ITimeframe {
  City?: string;
  CountryCode?: string;
  Date?: string;
  EndDate?: string;
  HouseNr?: string;
  HouseNrExt?: string;
  Options?: Array<TimeframeOption>;
  PostalCode?: string;
  StartDate?: string;
  Street?: string;
  SundaySorting?: string;
  Interval?: string;
  TimeframeRange?: string;
  Timeframes?: Array<ITimeframeTimeFrame>;
}

/**
 * Time frame option
 *
 * @param DayTime - Daytime delivery
 * @param Evening - Evening delivery
 * @param Morning - Morning delivery before 10:00
 * @param Noon - Morning delivery before 12:00
 * @param Sunday - Sunday delivery
 * @param Sameday - Sameday delivery (must be used in combination with `Evening`)
 * @param Afternoon - Afternoon delivery before 17:00
 * @param MyTime - Mytime delivery (Dutch: Op Afspraak bezorgd)
 */
export enum TimeframeOption {
  DayTime = 'DayTime',
  Evening = 'Evening',
  Morning = 'Morning',
  Noon = 'Noon',
  Sunday = 'Sunday',
  Sameday = 'Sameday',
  Afternoon = 'Afternoon',
  MyTime = 'Mytime',
}

/**
 * Delivery Option
 *
 * @param PG - Pick up at PostNL location (in Dutch: Ophalen bij PostNL locatie)
 * @param PGE - Pick up at PostNL location express (in Dutch: Extra Vroeg Ophalen)
 * @param KEL - Customer own location (in Dutch: Klant Eigen Locatie)
 */
export enum DeliveryOption {
  PG = 'PG',
  PGE = 'PGE',
  KEL = 'KEL',
}
