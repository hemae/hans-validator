# hans-validator
validator for express requests based validatorjs

## Table of contents
* [Installing](#installing)
* [Example](#example)

<a name="installing"><h2>Installing</h2></a>
Add the package to your project
```
npm i hans-validator
```
using yarn
```
yarn add hans-validator
```


<a name="example"><h2>Example</h2></a>

Export validator from *hans-validator*

```javascript
const validator = require('hans-validator')
const {ValidationRules, buildRules} = require('hans-validator')
```
using TypeScript
```typescript
import validator, {ValidationRules, buildRules} from 'hans-validator'
```

```typescript

const rules: ValidationRules = {
    field1: buildRules('number', 'required'),
    field2: buildRules('number', 'required')
}

const data = {
    field1: 1,
    field2: 'example'
}

const validation = validator(data, rules)

console.log(validation.fails()) // true
console.log(validation.errors.all()) // {field2: ['type of field2 must be number']}
```
