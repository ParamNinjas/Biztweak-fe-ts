import { current } from "@reduxjs/toolkit"

export interface IRecomendation {
    // id : number,
    // created_at : string,
    segment : string,
    userId : string
    segmentResponses : ISegmentResponse,
   
}

export interface ISegmentResponse {
    Customer : Array<Customer>
    Market : Array<Market>
    Value : Array<Value>
    Activities : Array<Activities>
    Resources : Array<Resources>
    
}
export interface Customer {
    key : string,
    value : string,
}
export interface Prototype {
    key : string,
    value : string,
}
export interface Revenue {
    key : string,
    value : string,
}

export interface Market {
    key : string,
    value : string,
}

export interface Value {
    key : string,
    value : string,
}
export interface Activities {
    key : string,
    value : string,
}

export interface Resources {
    key : string,
    value : string,
}
export interface Cost {
    key : string,
    value : string,
}
export interface Proof {
    key : string,
    value : string,
}
export interface CustomerRelation {
    key : string,
    value : string,
}
export interface Channels {
    key : string,
    value : string,
}
export interface eCommerce {
    key : string,
    value : string,
}
export interface Current {
    key : string,
    value : string,
}
export interface Partners {
    key : string,
    value : string,
}
export interface Traction {
    key : string,
    value : string,
}
export interface Unique {
    key : string,
    value : string,
}
export interface Financial {
    key : string,
    value : string,
}
export interface MarketInt {
    key : string,
    value : string,
}

export interface ICompany {
    // id : number,
    companyName : string,
    location : string,
    phase : string,
    registered : string,
    industry : string,
    employees : number,
    monTurnover : number, 
    annTurnover : number,
    product : string
}

export interface IProfile {
    // id : string,
    display_name : string,
    email : string,
    Role : number
}

export interface ICustomer{
    segment : string,
    userId : string
    segmentResponses : ICustomerResponse,
}

export interface ICustomerResponse {
    Channels : Array<Channels>
    Customer : Array<Customer>
    MarketInt: Array<MarketInt>
    Cost : Array<Cost>
    
    
}
export interface IFunding{
    segment : string,
    userId : string
    segmentResponses : IFundingResponse,
}

export interface IFundingResponse {
    Channels : Array<Channels>
    Customer : Array<Customer>
    Revenue: Array<Revenue>
    Value: Array<Value>
    Financial : Array<Financial>
    Proof : Array<Proof>
    
    
}
export interface IFullSuit{
    segment : string,
    userId : string
    segmentResponses : IFullSuitResponse,
}

export interface IFullSuitResponse {
    Prototype : Array<Prototype>
    Customer : Array<Customer>
    Revenue: Array<Revenue>
    Value: Array<Value>
    Cost : Array<Cost>
    Proof : Array<Proof>
    Resourceses : Array<Resources>
    CustomerRelation : Array<CustomerRelation>
    Channels: Array<Channels>
    eCommerce : Array<eCommerce>
    Activities : Array<Activities>
    Current: Array<Current>
    Partners : Array<Partners>
    Traction : Array<Traction>
    Unique: Array<Unique>
    
}