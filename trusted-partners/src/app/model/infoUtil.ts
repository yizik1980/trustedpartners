import info, { Meta, RelatedTopic } from "./info"

export class infoUtil{
    Abstract: string | undefined;
    AbstractSource: string | undefined;
    AbstractText: string | undefined;
    AbstractURL: string | undefined;
    Answer: string | undefined;
    AnswerType: string | undefined;
    Definition: string | undefined;
    DefinitionSource: string | undefined;
    DefinitionURL: string | undefined;
    Entity: string | undefined;
    Heading: string | undefined;
    Image: string | undefined;
    ImageHeight: number | undefined;
    ImageIsLogo: number | undefined;
    ImageWidth: number | undefined;
    Infobox: string | undefined;
    Redirect: string | undefined;
    RelatedTopics: RelatedTopic[] | undefined;
    Results: any[] | undefined;
    Type: string | undefined;
    meta: Meta | undefined;
    constructor(){
    }
    init(){
        
    }
}