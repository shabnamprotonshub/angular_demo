export class userDetails {
  'title': string;
  'url': string;
  'created_at': string;
  'author': string;
}
export class mainResponse {
  'hits': hits[];
  'nbHits': number;
  'page': number;
  'nbPages': number;
  'hitsPerPage': number;
  'processingTimeMS': number;
  'exhaustiveNbHits': boolean;
  'query': string;
  'params':string
}




export class hits {
  'created_at': number;
  'title': string;
  'url': string;
  'author': string;
  'points': number;
  'story_text': string;
  'comment_text': string;
  'num_comments': number;
  'story_id': string;
  'story_title': string;
  'story_url': string;
  'parent_id': number;
  'created_at_i': number;
  'relevancy_score': number;
  '_tags': any;
  'objectID': number;
  '_highlightResult': any
}
export class _highlightResult {
title:title[];
author:author[];
story_text:story_text[];
}
export class title {
  'value': string;
  'matchLevel': string
  'matchedWords': matchedWords[]
}
export class author {
  'value': string;
  'matchLevel': string;
  'matchedWords': matchedWords[]
}
export class story_text{
  'value': string;
  'matchLevel': string;
  'matchedWords': matchedWords[]
}
export class  matchedWords{
  matchedWords:string
}
export class _export{
  'story':string;
  'author_kaissaroj':string;
  'story_': number
}