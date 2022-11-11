import ValidatorJS, {Validator} from 'validatorjs'
import {AcceptRules, BuiltRules, ValidationRules} from './types'


export {AcceptRules, BuiltRules, ValidationRules} from './types'

export function buildRules(...rules: AcceptRules[]): BuiltRules {
    return rules.join('|')
}

export default function validator(data: Record<string, any>, rules: ValidationRules): Validator<Record<string, any>> {
    return new ValidatorJS(data, rules)
}
