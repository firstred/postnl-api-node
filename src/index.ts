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
import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';
import { get, defaults } from 'lodash';

import BarcodeService from './services/BarcodeService';

// @ts-ignore
import { version } from '../package.json';
import { IApiConfig } from './types/ApiConfig';
import ConfirmingService from './services/ConfirmingService';
import DeliveryDateService from './services/DeliveryDateService';
import LabellingService from './services/LabellingService';
import LocationService from './services/LocationService';
import ShippingStatusService from './services/ShippingStatusService';
import TimeframeService from './services/TimeframeService';

export default class PostNL {
  public barcode: BarcodeService;
  public confirming: ConfirmingService;
  public deliverydate: DeliveryDateService;
  public labelling: LabellingService;
  public location: LocationService;
  public shippingStatus: ShippingStatusService;
  public timeframe: TimeframeService;

  constructor(config?: IApiConfig, options?: AxiosRequestConfig) {
    const apiConfig = defaults(config, {
      apiKey: process.env.POSTNL_API_KEY,
      collectionLocation: process.env.POSTNL_API_KEY,
      contactPerson: process.env.POSTNL_CONTACT_PERSON,
      customerCode: process.env.POSTNL_CUSTOMER_CODE,
      customerNumber: process.env.POSTNL_CUSTOMER_NUMBER,
      globalpackBarcodeType: process.env.POSTNL_GLOBALPACK_BARCODE_TYPE,
      globalpackCustomerCode: process.env.POSTNL_GLOBALPACK_CUSTOMER_CODE,
    });

    const axiosOptions = options || {};

    axiosOptions.baseURL = `https://api${apiConfig.sandbox ? '-sandbox' : ''}.postnl.nl:443/`;

    axiosOptions.headers = {
      ...axiosOptions.headers,
      apikey: apiConfig.apiKey,
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
      'User-Agent': get(axiosOptions, 'headers[User-Agent]', `node.js/${version}`),
    };

    axiosOptions.paramsSerializer = axiosOptions.paramsSerializer || qs.stringify;

    const httpClient = axios.create(axiosOptions);
    this.barcode = new BarcodeService(httpClient, apiConfig);
    this.confirming = new ConfirmingService(httpClient, apiConfig);
    this.deliverydate = new DeliveryDateService(httpClient, apiConfig);
    this.labelling = new LabellingService(httpClient, apiConfig);
    this.location = new LocationService(httpClient, apiConfig);
    this.shippingStatus = new ShippingStatusService(httpClient, apiConfig);
    this.timeframe = new TimeframeService(httpClient, apiConfig);
  }
}
