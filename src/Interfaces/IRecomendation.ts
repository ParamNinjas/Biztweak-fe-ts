export interface IRecomendation {
    id : number,
    created_at : string,
    segmentResponses : ISegmentResponse,
    segment : string,
    userId : string
}

export interface ISegmentResponse {
    customer : Array<customer>
    Market : Array<Market>
    Value : Array<Value>
    Activities : Array<Activities>
    Resources : Array<Resources>
    
}
export interface customer {
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

export interface ICompany {
    id : number,
    companyName : string,
    location : string,
    phase : string,
    registered : string,
    industry : string,
    employees : string,
    turnover : string  
}