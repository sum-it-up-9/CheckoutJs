"use strict";(self.webpackJsonpCheckout=self.webpackJsonpCheckout||[]).push([[134],{78500:(e,t,n)=>{n.d(t,{Z:()=>D});var o=n(97582),r=n(55375),a=n(91074),s=n(67627),i=n(92574),l=n(56204),c=n(47086),d=n(78379),u=n(20157),p=n(59826),m={address1:"addressLine1",address2:"addressLine2",postalCode:"postCode",stateOrProvince:"province",stateOrProvinceCode:"provinceCode"};function h(e){return"".concat(m[e]||e)}function g(e){return"".concat(h(e),"Input")}const f=function(){function e(e){var t=e.address_components,n=e.name;this._name=n,this._address=t}return e.prototype.getState=function(){return this._get("administrative_area_level_1","short_name")},e.prototype.getStreet=function(){return this._name},e.prototype.getStreet2=function(){return"NZ"===this.getCountry()?this._get("sublocality","short_name"):this._get("subpremise","short_name")},e.prototype.getCity=function(){return this._get("postal_town","long_name")||this._get("locality","long_name")||this._get("neighborhood","short_name")},e.prototype.getCountry=function(){return this._get("country","short_name")},e.prototype.getPostCode=function(){return this._get("postal_code","short_name")},e.prototype._get=function(e,t){var n=this._address&&this._address.find((function(t){return-1!==t.types.indexOf(e)}));return n?n[t]:""},e}();const v=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,o.__extends)(t,e),t.prototype.getCity=function(){return this._get("sublocality_level_1","long_name")||this._get("locality","long_name")},t}(f);const _=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,o.__extends)(t,e),t.prototype.getState=function(){return""},t.prototype.getStreet2=function(){return this._get("locality","long_name")},t.prototype.getPostCode=function(){return""},t}(f);const y=function(){function e(){}return e.create=function(e){var t,n=null===(t=e.address_components)||void 0===t?void 0:t.find((function(e){return e.types.indexOf("country")>=0}));switch((null==n?void 0:n.short_name)||""){case"GB":return new _(e);case"CA":return new v(e);default:return new f(e)}},e}();var C=n(696),E=n.n(C),b=n(64553),S=n(92963),P=n(6904);const w=function(e){var t=e.children;return s.createElement("div",{className:"popover"},t)};function Z(e,t){var n=["popoverList-item"];return e===t&&n.push("is-active"),n.join(" ")}const A=(0,s.memo)((function(e){var t=e.highlightedIndex,n=void 0===t?-1:t,r=e.testId,a=e.getItemProps,i=void 0===a?function(e){return e}:a,l=e.menuProps,c=void 0===l?{}:l,d=e.items;return d.length?s.createElement("ul",(0,o.__assign)({className:"popoverList","data-test":r},c),d.map((function(e,t){return s.createElement("li",(0,o.__assign)({className:Z(n,t),"data-test":r&&"".concat(r,"-item")},i({key:e.id,index:t,item:e}),{key:t}),e.content)}))):null}));const O=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.stateReducer=function(e,n){var r=t.props.onChange;switch(n.type){case P.ZP.stateChangeTypes.blurInput:case P.ZP.stateChangeTypes.blurButton:case P.ZP.stateChangeTypes.mouseUp:case P.ZP.stateChangeTypes.touchEnd:return(0,o.__assign)((0,o.__assign)({},n),{inputValue:e.inputValue});case P.ZP.stateChangeTypes.changeInput:return n.inputValue!==e.inputValue&&r&&r(n.inputValue||"",e.isOpen),n;case P.ZP.stateChangeTypes.keyDownEnter:default:return n}},t.handleStateChange=function(e){var n=e.isOpen,o=e.inputValue,r=t.props.onToggleOpen,s=void 0===r?a.noop:r;void 0!==n&&s({isOpen:n,inputValue:o||""})},t}return(0,o.__extends)(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.inputProps,r=t.initialValue,i=t.initialHighlightedIndex,l=t.defaultHighlightedIndex,c=t.items,d=t.children,u=t.onSelect,p=t.listTestId;return s.createElement(P.ZP,{defaultHighlightedIndex:l,initialHighlightedIndex:i,initialInputValue:r,itemToString:this.itemToString,labelId:n&&n["aria-labelledby"]?n["aria-labelledby"]:null,onChange:u,onStateChange:this.handleStateChange,stateReducer:this.stateReducer},(function(t){var r=t.isOpen,i=t.getInputProps,l=t.getMenuProps,u=t.getItemProps,m=t.highlightedIndex,h=(0,o.__assign)((0,o.__assign)({},i()),n);return delete h.labelText,s.createElement("div",null,s.createElement("input",(0,o.__assign)({},h)),n&&(0,a.includes)(n.className,"floating")&&s.createElement(b.Z,{htmlFor:n.id,id:n["aria-labelledby"],isFloatingLabelEnabled:!0},n.labelText),r&&!!c.length&&s.createElement(w,null,s.createElement(A,{getItemProps:u,highlightedIndex:(0,a.isNumber)(m)?m:-1,items:c.map((function(t){return e.toPopoverItem(t)})),menuProps:l(),testId:p}),d))}))},t.prototype.toPopoverItem=function(e){return(0,o.__assign)((0,o.__assign)({},e),{content:this.highlightItem(e)})},t.prototype.highlightItem=function(e){if(!e.highlightedSlices||!e.highlightedSlices.length)return e.label;var t=0,n=0;return e.highlightedSlices.reduce((function(o,r,a){var i=e.label,l=r.offset,c=r.length,d=l-t;return d&&(o.push(s.createElement(s.Fragment,{key:n},i.substr(t,d))),n+=1),t=l+c,o.push(s.createElement("strong",{key:n},i.substr(l,c))),n+=1,a===(e.highlightedSlices||[]).length-1&&(o.push(s.createElement(s.Fragment,{key:n},i.substr(t))),n+=1),o}),[])},t.prototype.itemToString=function(e){return e&&e.value||""},t}(s.PureComponent);var k=n(33327);const I=function(){function e(){this._scriptLoader=(0,k.getScriptLoader)()}return e.prototype.loadMapsSdk=function(e){var t=this;return this._googleAutoComplete||(this._googleAutoComplete=new Promise((function(n,o){var r="initAutoComplete",a=["language=en","key=".concat(e),"libraries=places","callback=".concat(r)].join("&");window[r]=function(){(function(e){var t=e;return Boolean(t.google&&t.google.maps&&t.google.maps.places)})(window)&&n(window.google.maps),o()},t._scriptLoader.loadScript("//maps.googleapis.com/maps/api/js?".concat(a)).catch((function(e){throw t._googleAutoComplete=void 0,e}))}))),this._googleAutoComplete},e}();var x;const F=function(){function e(e,t){void 0===t&&(x||(x=new I),t=x),this._apiKey=e,this._scriptLoader=t}return e.prototype.getAutocompleteService=function(){return this._autocompletePromise||(this._autocompletePromise=this._scriptLoader.loadMapsSdk(this._apiKey).then((function(e){if(!e.places.AutocompleteService)throw new Error("`AutocompleteService` is undefined");return new e.places.AutocompleteService}))),this._autocompletePromise},e.prototype.getPlacesServices=function(){var e=document.createElement("div");return this._placesPromise||(this._placesPromise=this._scriptLoader.loadMapsSdk(this._apiKey).then((function(t){if(!t.places.PlacesService)throw new Error("`PlacesService` is undefined");return new t.places.PlacesService(e)}))),this._placesPromise},e}();const N=function(e){function t(t){var n=e.call(this,t)||this;return n.onSelect=function(e){var t=n.props,o=t.fields,r=t.onSelect,s=void 0===r?a.noop:r,i=t.nextElement;n.googleAutocompleteService.getPlacesServices().then((function(t){t.getDetails({placeId:e.id,fields:o||["address_components","name"]},(function(t){i&&i.focus(),s(t,e)}))}))},n.onChange=function(e){var t=n.props,o=t.isAutocompleteEnabled,r=t.onChange;if((void 0===r?a.noop:r)(e,!1),!o)return n.resetAutocomplete();n.setAutocomplete(e),n.setItems(e)},n.googleAutocompleteService=new F(t.apiKey),n.state={items:[],autoComplete:"off"},n}return(0,o.__extends)(t,e),t.prototype.render=function(){var e=this.props,t=e.initialValue,n=e.onToggleOpen,r=void 0===n?a.noop:n,i=e.inputProps,l=void 0===i?{}:i,c=this.state,d=c.autoComplete,u=c.items;return s.createElement(O,{defaultHighlightedIndex:-1,initialHighlightedIndex:-1,initialValue:t,inputProps:(0,o.__assign)((0,o.__assign)({},l),{autoComplete:d}),items:u,listTestId:"address-autocomplete-suggestions",onChange:this.onChange,onSelect:this.onSelect,onToggleOpen:r},s.createElement("div",{className:"co-googleAutocomplete-footer"}))},t.prototype.setItems=function(e){var t=this;if(e){var n=this.props,o=n.componentRestrictions,r=n.types;this.googleAutocompleteService.getAutocompleteService().then((function(n){n.getPlacePredictions({input:e,types:r||["geocode"],componentRestrictions:o},(function(e){return t.setState({items:t.toAutocompleteItems(e)})}))}))}else this.setState({items:[]})},t.prototype.resetAutocomplete=function(){this.setState({items:[],autoComplete:"off"})},t.prototype.setAutocomplete=function(e){this.setState((0,o.__assign)((0,o.__assign)({},this.state),{autoComplete:e&&e.length?"nope":"off"}))},t.prototype.toAutocompleteItems=function(e){return(e||[]).map((function(e){return{label:e.description,value:e.structured_formatting.main_text,highlightedSlices:e.matched_substrings,id:e.place_id}}))},t}(s.PureComponent);const L=(0,s.memo)((function(e){var t=e.field,n=t.default,o=t.name,r=t.maxLength,a=e.countryCode,l=e.supportedCountries,c=e.parentFieldName,d=e.nextElement,u=e.apiKey,p=e.onSelect,m=e.onChange,f=e.onToggleOpen,v=e.isFloatingLabelEnabled,_=c?"".concat(c,".").concat(o):o,y=(0,s.useMemo)((function(){return s.createElement(i.Z,{id:"address.address_line_1_label"})}),[]),C=function(e){return"".concat(h(e),"Label")}(o),P=(0,s.useMemo)((function(){return{className:E()("form-input optimizedCheckout-form-input",{"floating-input":v}),id:g(o),"aria-labelledby":C,placeholder:v?" ":n,labelText:v?y:null,maxLength:r||void 0}}),[o,C,n,y,r]),w=(0,s.useCallback)((function(e){var t=e.field;return s.createElement(N,{apiKey:u,componentRestrictions:a?{country:a}:void 0,initialValue:t.value,inputProps:P,isAutocompleteEnabled:!!a&&l.indexOf(a)>-1,nextElement:d,onChange:m,onSelect:p,onToggleOpen:f})}),[u,a,P,d,m,p,f,l]),Z=v?null:s.createElement(b.Z,{htmlFor:P.id,id:C,isFloatingLabelEnabled:v},y);return s.createElement("div",{className:E()("dynamic-form-field dynamic-form-field--addressLineAutocomplete",{"floating-form-field":v})},s.createElement(S.Z,{input:w,isFloatingLabelEnabled:v,label:Z,name:_}))}));var T={address1:"address.address_line_1_label",address2:"address.address_line_2_label",city:"address.city_label",company:"address.company_name_label",countryCode:"address.country_label",firstName:"address.first_name_label",lastName:"address.last_name_label",phone:"address.phone_number_label",postalCode:"address.postal_code_label",stateOrProvince:"address.state_label",stateOrProvinceCode:"address.state_label"},V={address1:"address-line1",address2:"address-line2",city:"address-level2",company:"organization",countryCode:"country",firstName:"given-name",lastName:"family-name",phone:"tel",postalCode:"postal-code",stateOrProvince:"address-level1",stateOrProvinceCode:"address-level1"},R={countryCode:"address.select_country_action",stateOrProvince:"address.select_state_action",stateOrProvinceCode:"address.select_state_action"},M="address1",K=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.containerRef=(0,s.createRef)(),t.handleDynamicFormFieldChange=(0,r.memoize)((function(e){return function(n){t.syncNonFormikValue(e,n)}})),t.handleAutocompleteChange=function(e,n){n||t.syncNonFormikValue(M,e)},t.handleAutocompleteSelect=function(e,n){var r=n.value,s=t.props,i=s.countries,l=s.setFieldValue,c=void 0===l?a.noop:l,d=s.onChange,u=void 0===d?a.noop:d,p=function(e,t){if(void 0===t&&(t=[]),!e||!e.address_components)return{};var n=y.create(e),r=n.getState(),a=n.getCountry(),s=t&&t.find((function(e){return a===e.code})),i=n.getStreet2();return(0,o.__assign)({address2:i,city:n.getCity(),countryCode:a,postalCode:n.getPostCode()},r?function(e,t){void 0===t&&(t=[]);var n=t.find((function(t){var n=t.code,o=t.name;return n===e||o===e}));return n?{stateOrProvince:n.name,stateOrProvinceCode:n.code}:{stateOrProvince:t.length?"":e,stateOrProvinceCode:""}}(r,s&&s.subdivisions):{})}(e,i);(0,a.forIn)(p,(function(e,t){c(t,e),u(t,e)})),r&&t.syncNonFormikValue(M,r)},t.syncNonFormikValue=function(e,n){var o=t.props,r=o.formFields,s=o.setFieldValue,i=void 0===s?a.noop:s,l=o.onChange,d=void 0===l?a.noop:l,u=r.filter((function(e){return e.custom&&e.fieldType===c.Z.date})).map((function(e){return e.name}));(e===M||u.indexOf(e)>-1)&&i(e,n),d(e,n)},t}return(0,o.__extends)(t,e),t.prototype.componentDidMount=function(){var e=this.containerRef.current;e&&(this.nextElement=e.querySelector('[autocomplete="address-line2"]'))},t.prototype.render=function(){var e=this,t=this.props,n=t.formFields,o=t.fieldName,r=t.countriesWithAutocomplete,a=t.countryCode,l=t.googleMapsApiKey,c=t.onAutocompleteToggle,m=t.shouldShowSaveAddress,f=t.isFloatingLabelEnabled;return s.createElement(s.Fragment,null,s.createElement(d.Z,null,s.createElement("div",{className:"checkout-address",ref:this.containerRef},n.map((function(t){var n=t.name,d=R[n];return"address1"===n&&l&&r?s.createElement(L,{apiKey:l,countryCode:a,field:t,isFloatingLabelEnabled:f,key:t.id,nextElement:e.nextElement||void 0,onChange:e.handleAutocompleteChange,onSelect:e.handleAutocompleteSelect,onToggleOpen:c,parentFieldName:o,supportedCountries:r}):s.createElement(u.Z,{autocomplete:V[t.name],extraClass:"dynamic-form-field--".concat(h(n)),field:t,inputId:g(n),isFloatingLabelEnabled:f,key:"".concat(t.id,"-").concat(t.name),label:t.custom?t.label:s.createElement(i.Z,{id:T[t.name]}),onChange:e.handleDynamicFormFieldChange(n),parentFieldName:t.custom?o?"".concat(o,".customFields"):"customFields":o,placeholder:e.getPlaceholderValue(t,d)})})))),m&&s.createElement(p.Z,{labelContent:s.createElement(i.Z,{id:"address.save_in_addressbook"}),name:o?"".concat(o,".shouldSaveAddress"):"shouldSaveAddress"}))},t.prototype.getPlaceholderValue=function(e,t){var n=this.props.language;return e.default&&"dropdown"!==e.fieldType?e.default:t&&n.translate(t)},t}(s.Component);const D=(0,l.Z)(K)},24648:(e,t,n)=>{n.d(t,{Z:()=>h});var o=n(67627),r=n(58612),a=n(92574),s=n(31478),i=n(63360),l=n(24994),c=n(56204),d=n(36636);const u=(0,c.Z)((function(e){var t=e.selectedAddress,n=e.language,s=e.type,i=(0,o.useState)(!1),l=i[0],c=i[1];return o.createElement("a",{"aria-controls":"addressDropdown","aria-description":n.translate("address.enter_or_select_address_action"),"aria-expanded":l,className:"button dropdown-button dropdown-toggle--select",href:"#",id:"addressToggle",onClick:(0,r.Z)((function(){return c(!l)})),onBlur:function(){return c(!1)}},t?o.createElement(d.Z,{address:t,type:s}):o.createElement(a.Z,{id:"address.enter_address_action"}))}));var p=n(88870),m=function(e){var t=e.addresses,n=e.onSelectAddress,s=e.onUseNewAddress,i=e.selectedAddress,l=e.type;return o.createElement("ul",{className:"dropdown-menu instrumentSelect-dropdownMenu",id:"addressDropdown"},o.createElement("li",{className:"dropdown-menu-item dropdown-menu-item--select"},o.createElement("a",{"data-test":"add-new-address",href:"#",onClick:(0,r.Z)((function(){return s(i)}))},o.createElement(a.Z,{id:"address.enter_address_action"}))),t.map((function(e){return o.createElement("li",{className:"dropdown-menu-item dropdown-menu-item--select",key:e.id},o.createElement("a",{href:"#",onClick:(0,r.Z)((function(){return n(e)}))},o.createElement(d.Z,{address:e,type:l})))})))};const h=(0,o.memo)((function(e){var t=e.addresses,n=e.selectedAddress,r=e.type,a=e.onSelectAddress,c=e.onUseNewAddress,d=(0,s.Z)().shouldShowPayPalFastlaneLabel;return o.createElement("div",{className:"form-field"},o.createElement("div",{className:"dropdown--select"},o.createElement(l.Z,{dropdown:o.createElement(m,{addresses:t,onSelectAddress:function(e){(0,p.Z)(n,e)||a(e)},onUseNewAddress:function(){c(n)},selectedAddress:n,type:r})},o.createElement(u,{addresses:t,selectedAddress:n,type:r}))),d&&o.createElement(i.Z,null))}))},88870:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(97582),r=n(91074);function a(e,t){return!(!e||!t)&&((0,r.isEqual)(s(e),s(t))&&function(e,t){if(e.stateOrProvince&&e.stateOrProvince===t.stateOrProvince)return!0;if(e.stateOrProvinceCode&&e.stateOrProvinceCode===t.stateOrProvinceCode)return!0;return e.stateOrProvince===t.stateOrProvince&&e.stateOrProvinceCode===t.stateOrProvinceCode}(e,t))}function s(e){return(0,r.omit)((0,o.__assign)((0,o.__assign)({},e),{customFields:(e.customFields||[]).filter((function(e){return!!e.fieldValue}))}),["id","shouldSaveAddress","stateOrProvince","stateOrProvinceCode","type","email","country"])}},97204:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(91074),r=n(88870),a=n(33497);function s(e,t,n){return!(!e||!(0,a.Z)(e,n))&&(0,o.some)(t,(function(t){return(0,r.Z)(t,e)}))}},95593:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(97582),r=n(19945);function a(e){var t=e.customFields,n=(0,o.__rest)(e,["customFields"]),a=e.shouldSaveAddress;return(0,o.__assign)((0,o.__assign)({},n),{shouldSaveAddress:a,customFields:(0,r.Z)(t)})}},67570:(e,t,n)=>{n.d(t,{Z:()=>u});var o=n(97582),r=n(67627),a=n(92574),s=n(64553),i=n(7936),l=n(98119),c=n(78379),d=n(92963);const u=function(){var e=(0,r.useCallback)((function(e){return r.createElement(s.Z,{hidden:!0,htmlFor:e},r.createElement(a.Z,{id:"shipping.order_comment_label"}))}),[]),t=(0,r.useCallback)((function(e){var t=e.field;return r.createElement(i.Z,(0,o.__assign)({},t,{autoComplete:"off",maxLength:2e3}))}),[]),n=(0,r.useMemo)((function(){return r.createElement(l.Z,null,r.createElement(a.Z,{id:"shipping.order_comment_label"}))}),[]);return r.createElement(c.Z,{legend:n,testId:"checkout-shipping-comments"},r.createElement(d.Z,{input:t,label:e,name:"orderComment",id:"orderComment"}))}},41957:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(10631),r=n(56851);function a(e){return(e&&e.payments?e.payments:[]).find((function(e){return!(0,o.Z)(e)&&!(0,r.Z)(e)&&!!e.providerId}))}},74161:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(92304);function r(e){return(0,o.Z)(e.lineItems.physicalItems.filter((function(e){return!e.addedByPromotion})))}},24994:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(97582),r=n(67627),a=n(80850),s=n(45433);const i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={shouldShow:!1},t.handleClick=function(e){t.state.shouldShow?t.handleClose(e.nativeEvent):t.handleOpen(e.nativeEvent)},t.handleOpen=function(){t.state.shouldShow||t.setState({shouldShow:!0},(function(){var e;null===(e=t.getRootElement())||void 0===e||e.addEventListener("click",t.handleClose)}))},t.handleClose=function(){t.state.shouldShow&&t.setState({shouldShow:!1},(function(){var e;null===(e=t.getRootElement())||void 0===e||e.removeEventListener("click",t.handleClose)}))},t}return(0,o.__extends)(t,e),t.prototype.componentWillUnmount=function(){document.removeEventListener("click",this.handleClose)},t.prototype.render=function(){var e=this,t=this.props,n=t.children,s=t.placement,i=t.dropdown,l=this.state.shouldShow;return r.createElement(a.dK,null,r.createElement(a.s3,null,(function(t){var o=t.ref;return r.createElement("div",{className:"dropdownTrigger",onClick:e.handleClick,ref:o},n)})),r.createElement(a.rD,{modifiers:{hide:{enabled:!1},flip:{enabled:!1},preventOverflow:{enabled:!1}},placement:s},(function(e){var t=e.ref,n=e.style;return l?r.createElement("div",{className:"dropdownMenu",ref:t,style:(0,o.__assign)((0,o.__assign)({},n),{width:"100%",zIndex:1})},i):null})))},t.prototype.getRootElement=function(){return document.getElementById(s.V)||document.getElementById(s.Z)},t.defaultProps={placement:"bottom-start"},t}(r.Component)},45433:(e,t,n)=>{n.d(t,{V:()=>o,Z:()=>r});var o="checkout-app",r="micro-app-ng-checkout"}}]);
//# sourceMappingURL=134-de7e344e.js.map