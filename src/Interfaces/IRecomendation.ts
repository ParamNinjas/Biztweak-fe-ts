export interface IRecomendation {
    id : number,
    created_at : string,
    segmentResponses : ISegmentResponse[],
    segment : string,
    userId : string
}

export interface ISegmentResponse {
    key : string,
    value : string,
}