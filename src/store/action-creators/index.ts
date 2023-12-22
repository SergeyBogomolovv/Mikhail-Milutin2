import * as contactsActionCreators from './contacts'
import * as featuredActionCreators from './featured'

export default {
    ...contactsActionCreators,
    ...featuredActionCreators
}