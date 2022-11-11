export type AcceptRules =
    'array'
    | 'boolean'
    | 'email'
    | 'integer'
    | 'numeric'
    | 'required'
    | 'string'
    | 'url'
    | string

export type BuiltRules = string

export type ValidationRules = Record<string, BuiltRules>
