/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.controller.ts":
/*!*******************************!*\
  !*** ./src/app.controller.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppController": () => (/* binding */ AppController)
/* harmony export */ });
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.service */ "./src/app.service.ts");
var _dec, _dec2, _dec3, _class;



let AppController = (_dec = (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_0__.Controller)(), _dec2 = Reflect.metadata("design:type", Function), _dec3 = Reflect.metadata("design:paramtypes", [typeof _app_service__WEBPACK_IMPORTED_MODULE_1__.AppService === "undefined" ? Object : _app_service__WEBPACK_IMPORTED_MODULE_1__.AppService]), _dec(_class = _dec2(_class = _dec3(_class = class AppController {
  constructor(appService) {
    this.appService = appService;
  }

}) || _class) || _class) || _class);

/***/ }),

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.controller */ "./src/app.controller.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./src/app.service.ts");
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nestjs_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/apollo */ "@nestjs/apollo");
/* harmony import */ var _nestjs_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ydb_ydb_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ydb/ydb.module */ "./src/ydb/ydb.module.ts");
/* harmony import */ var _images_images_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/images.module */ "./src/images/images.module.ts");
var _dec, _class;









let AppModule = (_dec = (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_0__.Module)({
  imports: [_nestjs_config__WEBPACK_IMPORTED_MODULE_5__.ConfigModule.forRoot(), _nestjs_graphql__WEBPACK_IMPORTED_MODULE_3__.GraphQLModule.forRoot({
    // TODO исправить для прода и теста
    path: "/proxy/graphql",
    driver: _nestjs_apollo__WEBPACK_IMPORTED_MODULE_4__.ApolloDriver,
    autoSchemaFile: true
  }), _ydb_ydb_module__WEBPACK_IMPORTED_MODULE_6__.YdbModule.forRoot({
    endpoint: process.env.YDB_ENDPOINT,
    database: process.env.DATABASE,
    logger: true
  }), _images_images_module__WEBPACK_IMPORTED_MODULE_7__.ImagesModule],
  controllers: [_app_controller__WEBPACK_IMPORTED_MODULE_1__.AppController],
  providers: [_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService]
}), _dec(_class = class AppModule {}) || _class);

/***/ }),

/***/ "./src/app.service.ts":
/*!****************************!*\
  !*** ./src/app.service.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppService": () => (/* binding */ AppService)
/* harmony export */ });
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_0__);
var _dec, _dec2, _dec3, _dec4, _class, _class2;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }


let AppService = (_dec = (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_0__.Resolver)(), _dec2 = (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_0__.Query)(() => String), _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", []), _dec(_class = (_class2 = class AppService {
  getHello() {
    return "Hello World 123!";
  }

}, (_applyDecoratedDescriptor(_class2.prototype, "getHello", [_dec2, _dec3, _dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "getHello"), _class2.prototype)), _class2)) || _class);

/***/ }),

/***/ "./src/images/images.entity.ts":
/*!*************************************!*\
  !*** ./src/images/images.entity.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImagesEntity": () => (/* binding */ ImagesEntity)
/* harmony export */ });
/* harmony import */ var _ydb_decorators_column_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ydb/decorators/column.decorator */ "./src/ydb/decorators/column.decorator.ts");
/* harmony import */ var _ydb_decorators_entity_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ydb/decorators/entity.decorator */ "./src/ydb/decorators/entity.decorator.ts");
/* harmony import */ var _ydb_decorators_primary_column_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ydb/decorators/primary-column.decorator */ "./src/ydb/decorators/primary-column.decorator.ts");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }




let ImagesEntity = (_dec = (0,_ydb_decorators_entity_decorator__WEBPACK_IMPORTED_MODULE_1__.Entity)(), _dec2 = (0,_ydb_decorators_primary_column_decorator__WEBPACK_IMPORTED_MODULE_2__.PrimaryColumn)(), _dec3 = Reflect.metadata("design:type", String), _dec4 = (0,_ydb_decorators_column_decorator__WEBPACK_IMPORTED_MODULE_0__.Column)(), _dec5 = Reflect.metadata("design:type", String), _dec6 = (0,_ydb_decorators_column_decorator__WEBPACK_IMPORTED_MODULE_0__.Column)(), _dec7 = Reflect.metadata("design:type", String), _dec8 = (0,_ydb_decorators_column_decorator__WEBPACK_IMPORTED_MODULE_0__.Column)(), _dec9 = Reflect.metadata("design:type", String), _dec10 = (0,_ydb_decorators_column_decorator__WEBPACK_IMPORTED_MODULE_0__.Column)(), _dec11 = Reflect.metadata("design:type", String), _dec12 = (0,_ydb_decorators_column_decorator__WEBPACK_IMPORTED_MODULE_0__.Column)(), _dec13 = Reflect.metadata("design:type", String), _dec14 = (0,_ydb_decorators_column_decorator__WEBPACK_IMPORTED_MODULE_0__.Column)(), _dec15 = Reflect.metadata("design:type", Number), _dec(_class = (_class2 = class ImagesEntity {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor, this);

    _initializerDefineProperty(this, "url", _descriptor2, this);

    _initializerDefineProperty(this, "tags", _descriptor3, this);

    _initializerDefineProperty(this, "fileUrl", _descriptor4, this);

    _initializerDefineProperty(this, "base64Image", _descriptor5, this);

    _initializerDefineProperty(this, "title", _descriptor6, this);

    _initializerDefineProperty(this, "queueId", _descriptor7, this);
  } // queue: QueueEntity;
  // created!: Date;
  // updated!: Date;


}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "url", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "tags", [_dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "fileUrl", [_dec8, _dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "base64Image", [_dec10, _dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "title", [_dec12, _dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "queueId", [_dec14, _dec15], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);

/***/ }),

/***/ "./src/images/images.module.ts":
/*!*************************************!*\
  !*** ./src/images/images.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImagesModule": () => (/* binding */ ImagesModule)
/* harmony export */ });
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ydb_ydb_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ydb/ydb.module */ "./src/ydb/ydb.module.ts");
/* harmony import */ var _images_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images.entity */ "./src/images/images.entity.ts");
var _dec, _class;




let ImagesModule = (_dec = (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_0__.Module)({
  imports: [_ydb_ydb_module__WEBPACK_IMPORTED_MODULE_1__.YdbModule.forFeature([_images_entity__WEBPACK_IMPORTED_MODULE_2__.ImagesEntity]) // NestjsQueryGraphQLModule.forFeature({
  //     imports: [YdbModule.forFeature([ImagesEntity])],
  //     resolvers: [{ DTOClass: ImagesDto, EntityClass: ImagesEntity }],
  // }),
  ]
}), _dec(_class = class ImagesModule {}) || _class);

/***/ }),

/***/ "./src/ydb/builder/ydb-builder.provider.ts":
/*!*************************************************!*\
  !*** ./src/ydb/builder/ydb-builder.provider.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YDbBuilder": () => (/* binding */ YDbBuilder)
/* harmony export */ });
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logger_logger_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logger/logger.provider */ "./src/ydb/logger/logger.provider.ts");
/* harmony import */ var _metadata_ydb_metadata_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../metadata/ydb-metadata.provider */ "./src/ydb/metadata/ydb-metadata.provider.ts");
/* harmony import */ var _query_runner_query_runner_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../query-runner/query-runner.provider */ "./src/ydb/query-runner/query-runner.provider.ts");
/* harmony import */ var _struct_table_struct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../struct/table.struct */ "./src/ydb/struct/table.struct.ts");
var _dec, _dec2, _dec3, _class;






let YDbBuilder = (_dec = (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_0__.Injectable)(), _dec2 = Reflect.metadata("design:type", Function), _dec3 = Reflect.metadata("design:paramtypes", [typeof _metadata_ydb_metadata_provider__WEBPACK_IMPORTED_MODULE_2__.YdbMetadata === "undefined" ? Object : _metadata_ydb_metadata_provider__WEBPACK_IMPORTED_MODULE_2__.YdbMetadata, typeof _query_runner_query_runner_provider__WEBPACK_IMPORTED_MODULE_3__.QueryRunner === "undefined" ? Object : _query_runner_query_runner_provider__WEBPACK_IMPORTED_MODULE_3__.QueryRunner, typeof _logger_logger_provider__WEBPACK_IMPORTED_MODULE_1__.Logger === "undefined" ? Object : _logger_logger_provider__WEBPACK_IMPORTED_MODULE_1__.Logger]), _dec(_class = _dec2(_class = _dec3(_class = class YDbBuilder {
  constructor(metadata, queryRunner, logger) {
    this.metadata = metadata;
    this.queryRunner = queryRunner;
    this.logger = logger;
    this.tablesMetadata = [];
    this.tablesToSyncMetadata = [];
    this.initialize();
  }

  async initialize() {
    this.metadata.build();
    this.tablesMetadata = this.metadata.entitiesMetadata;
    this.tablesToSyncMetadata = this.tablesMetadata.filter(({
      synchronize
    }) => synchronize);
    const tablesPath = this.tablesToSyncMetadata.map(({
      name
    }) => name);
    await this.queryRunner.getTables(tablesPath);
    await this.synchronizeInOrder();
  }

  async synchronizeInOrder() {
    await this.renameColumns();
    await this.createNewTables();
    await this.dropRemovedColumns();
    await this.addNewColumns();
    await this.updatePrimaryKeys();
    await this.updateExistColumns();
    await this.createNewIndices();
    await this.createNewChecks();
  }

  async renameColumns() {}

  async createNewTables() {
    for (const metadata of this.tablesToSyncMetadata) {
      const isTableExist = this.queryRunner.loadedTables.find(table => table.name === metadata.name);
      if (isTableExist) continue;
      this.logger.logSchema(`Creating new table ${metadata.name}`);
      const table = _struct_table_struct__WEBPACK_IMPORTED_MODULE_4__.Table["new"](metadata); // const tables = this.queryRunner.loadedTables;
    } // this.driver.tableClient.withSession(async (session) => {
    //     debugger;
    //     console.log(await this.driver.schemeClient.listDirectory(""))
    //     // await session.createTable(
    //     //     "foo",
    //     //     new TableDescription()
    //     //         .withColumn(new Column("customer_id", Types.optional(Types.UINT64)))
    //     //         .withColumn(new Column("order_id", Types.optional(Types.UINT64)))
    //     //         .withColumn(new Column("description", Types.optional(Types.UTF8)))
    //     //         .withColumn(new Column("order_date", Types.optional(Types.DATE)))
    //     //         .withPrimaryKeys("customer_id", "order_id"),
    //     // );
    //     // console.log(await session.executeQuery(query))
    //     debugger;
    // });

  }

  async dropRemovedColumns() {}

  async addNewColumns() {}

  async updatePrimaryKeys() {}

  async updateExistColumns() {}

  async createNewIndices() {}

  async createNewChecks() {}

}) || _class) || _class) || _class);

/***/ }),

/***/ "./src/ydb/decorators/column.decorator.ts":
/*!************************************************!*\
  !*** ./src/ydb/decorators/column.decorator.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Column": () => (/* binding */ Column)
/* harmony export */ });
/* harmony import */ var _helpers_ydb_types_static_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/ydb-types-static.helper */ "./src/ydb/helpers/ydb-types-static.helper.ts");
/* harmony import */ var _metadata_store_ydb_metadata_column_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../metadata/store/ydb-metadata-column.store */ "./src/ydb/metadata/store/ydb-metadata-column.store.ts");
/* harmony import */ var _utils_is_object_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/is-object.util */ "./src/ydb/utils/is-object.util.ts");



function Column(typeOrOption, maybeOption) {
  let type;
  let options;
  type = typeof typeOrOption === "string" ? typeOrOption : null;
  options = (0,_utils_is_object_util__WEBPACK_IMPORTED_MODULE_2__.isObject)(typeOrOption) ? typeOrOption : maybeOption;
  options = options ?? {};
  return (target, name) => {
    if (!type) {
      ({
        type = null
      } = options);
    }

    if (type === null) {
      const reflectKeyType = Reflect?.getMetadata("design:type", target, name);
      type = [reflectKeyType === String && _helpers_ydb_types_static_helper__WEBPACK_IMPORTED_MODULE_0__.YdbTypesStatic.Utf8, reflectKeyType === Number && _helpers_ydb_types_static_helper__WEBPACK_IMPORTED_MODULE_0__.YdbTypesStatic.Uint32, reflectKeyType === Boolean && _helpers_ydb_types_static_helper__WEBPACK_IMPORTED_MODULE_0__.YdbTypesStatic.Bool].find(Boolean);
    }

    _metadata_store_ydb_metadata_column_store__WEBPACK_IMPORTED_MODULE_1__.YdbMetadataColumnStore.add({
      target: target.constructor,
      type,
      name,
      options
    });
  };
}

/***/ }),

/***/ "./src/ydb/decorators/entity.decorator.ts":
/*!************************************************!*\
  !*** ./src/ydb/decorators/entity.decorator.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Entity": () => (/* binding */ Entity)
/* harmony export */ });
/* harmony import */ var _metadata_store_ydb_metadata_table_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../metadata/store/ydb-metadata-table.store */ "./src/ydb/metadata/store/ydb-metadata-table.store.ts");
/* harmony import */ var _utils_get_table_name_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/get-table-name.util */ "./src/ydb/utils/get-table-name.util.ts");
/* harmony import */ var _utils_is_object_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/is-object.util */ "./src/ydb/utils/is-object.util.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function Entity(nameOrOptions, maybeOption) {
  const options = ((0,_utils_is_object_util__WEBPACK_IMPORTED_MODULE_2__.isObject)(nameOrOptions) ? nameOrOptions : maybeOption) || {};
  const name = typeof nameOrOptions === "string" ? nameOrOptions : nameOrOptions?.name;
  options.synchronize = options.synchronize === false ? false : true;
  return target => {
    const tableName = name || target.name;
    _metadata_store_ydb_metadata_table_store__WEBPACK_IMPORTED_MODULE_0__.YdbMetadataTableStore.add(_objectSpread({
      target,
      name: (0,_utils_get_table_name_util__WEBPACK_IMPORTED_MODULE_1__.getTableName)(tableName)
    }, options)); // YdbMetadataStore.addTable({
    //     target,
    //     name: getTableName(tableName),
    //     ...options,
    // });
  };
}

/***/ }),

/***/ "./src/ydb/decorators/primary-column.decorator.ts":
/*!********************************************************!*\
  !*** ./src/ydb/decorators/primary-column.decorator.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrimaryColumn": () => (/* binding */ PrimaryColumn)
/* harmony export */ });
function PrimaryColumn() {
  return () => {};
}

/***/ }),

/***/ "./src/ydb/helpers/ydb-types-static.helper.ts":
/*!****************************************************!*\
  !*** ./src/ydb/helpers/ydb-types-static.helper.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YdbTypesStatic": () => (/* binding */ YdbTypesStatic)
/* harmony export */ });
// eslint-disable-next-line unicorn/no-static-only-class
class YdbTypesStatic {}
YdbTypesStatic.Bool = "Bool";
YdbTypesStatic.Int8 = "Int8";
YdbTypesStatic.Int16 = "Int16";
YdbTypesStatic.Int32 = "Int32";
YdbTypesStatic.Int64 = "Int64";
YdbTypesStatic.Uint8 = "Uint8";
YdbTypesStatic.Uint16 = "Uint16";
YdbTypesStatic.Uint32 = "Uint32";
YdbTypesStatic.Uint64 = "Uint64";
YdbTypesStatic.Float = "Float";
YdbTypesStatic.Double = "Double";
YdbTypesStatic.Decimal = "Decimal";
YdbTypesStatic.DyNumber = "DyNumber";
YdbTypesStatic.String = "String";
YdbTypesStatic.Utf8 = "Utf8";
YdbTypesStatic.Json = "Json";
YdbTypesStatic.JsonDocument = "JsonDocument";
YdbTypesStatic.Yson = "Yson";
YdbTypesStatic.Uuid = "Uuid";
YdbTypesStatic.Date = "Date";
YdbTypesStatic.Datetime = "Datetime";
YdbTypesStatic.Timestamp = "Timestamp";
YdbTypesStatic.Interval = "Interval";
YdbTypesStatic.TzDate = "TzDate";
YdbTypesStatic.TzDateTime = "TzDateTime";
YdbTypesStatic.TzTimestamp = "TzTimestamp";

/***/ }),

/***/ "./src/ydb/logger/logger.provider.ts":
/*!*******************************************!*\
  !*** ./src/ydb/logger/logger.provider.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Logger": () => (/* binding */ Logger)
/* harmony export */ });
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cli_highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cli-highlight */ "cli-highlight");
/* harmony import */ var cli_highlight__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cli_highlight__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debug */ "debug");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_2__);
var _dec, _dec2, _dec3, _class;




let Logger = (_dec = (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_0__.Injectable)(), _dec2 = Reflect.metadata("design:type", Function), _dec3 = Reflect.metadata("design:paramtypes", [void 0]), _dec(_class = _dec2(_class = _dec3(_class = class Logger {
  constructor(enabled) {
    this.enabled = enabled;
    this.debugQuery = debug__WEBPACK_IMPORTED_MODULE_2___default()("ydb:query:log");
    this.debugSchema = debug__WEBPACK_IMPORTED_MODULE_2___default()("ydb:schema:log");
    this.debugLog = debug__WEBPACK_IMPORTED_MODULE_2___default()("ydb:log");
    this.debugInfo = debug__WEBPACK_IMPORTED_MODULE_2___default()("ydb:info");
    this.debugWarn = debug__WEBPACK_IMPORTED_MODULE_2___default()("ydb:warn");

    if (this.enabled) {
      debug__WEBPACK_IMPORTED_MODULE_2___default().enable("ydb:*");
    }
  }

  highlight(sql) {
    return (0,cli_highlight__WEBPACK_IMPORTED_MODULE_1__.highlight)(sql, {
      language: "sql",
      ignoreIllegals: true
    });
  }

  logQuery(query, parameters) {
    if (this.debugQuery.enabled) {
      this.debugQuery(this.highlight(query));

      if (parameters?.length) {
        this.debugQuery("parameters:", parameters);
      }
    }
  }

  logSchema(message) {
    if (this.debugSchema.enabled) {
      this.debugSchema(message);
    }
  }

  log(message, level = "log") {
    switch (level) {
      case "log":
        if (this.debugLog.enabled) {
          this.debugLog(message);
        }

        break;

      case "info":
        if (this.debugInfo.enabled) {
          this.debugInfo(message);
        }

        break;

      case "warn":
        if (this.debugWarn.enabled) {
          this.debugWarn(message);
        }

        break;
    }
  }

}) || _class) || _class) || _class);

/***/ }),

/***/ "./src/ydb/metadata/column-metadata.ts":
/*!*********************************************!*\
  !*** ./src/ydb/metadata/column-metadata.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColumnMetadata": () => (/* binding */ ColumnMetadata)
/* harmony export */ });
/* harmony import */ var _types_abstract_column_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/abstract-column.type */ "./src/ydb/types/abstract-column.type.ts");

class ColumnMetadata extends _types_abstract_column_type__WEBPACK_IMPORTED_MODULE_0__.AbstractColumn {
  constructor(metadata) {
    super(metadata.options);
    this.name = metadata.name;
    this.type = metadata.type;
  }

}

/***/ }),

/***/ "./src/ydb/metadata/entity-metadata.ts":
/*!*********************************************!*\
  !*** ./src/ydb/metadata/entity-metadata.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntityMetadata": () => (/* binding */ EntityMetadata)
/* harmony export */ });
/* harmony import */ var _column_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./column-metadata */ "./src/ydb/metadata/column-metadata.ts");
/* harmony import */ var _table_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-metadata */ "./src/ydb/metadata/table-metadata.ts");


class EntityMetadata {
  constructor(options) {
    this.connection = void 0;
    this.table = void 0;
    this.columns = void 0;
    this.tableMetadataStorage = void 0;

    if (!options.connection) {
      throw new Error("No connection");
    }

    this.connection = options?.connection;
    this.table = options?.table;
    this.columns = options?.columns;
    this.build();
  }

  get synchronize() {
    return this.table.synchronize;
  }

  get name() {
    return this.table.name;
  }

  get tableMetadata() {
    return this.tableMetadataStorage;
  }

  build() {
    this.tableMetadataStorage = new _table_metadata__WEBPACK_IMPORTED_MODULE_1__.TableMetadata({
      name: this.table.name,
      target: this.table.target,
      database: this.table.database,
      owner: this.table.owner,
      synchronize: this.table.synchronize
    });
    this.tableMetadata.columns = this.columns.map(column => new _column_metadata__WEBPACK_IMPORTED_MODULE_0__.ColumnMetadata(column));
  }

}

/***/ }),

/***/ "./src/ydb/metadata/store/ydb-metadata-column.store.ts":
/*!*************************************************************!*\
  !*** ./src/ydb/metadata/store/ydb-metadata-column.store.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YdbMetadataColumnStore": () => (/* binding */ YdbMetadataColumnStore)
/* harmony export */ });
/* harmony import */ var _types_abstract_store_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/abstract-store.type */ "./src/ydb/types/abstract-store.type.ts");

class YdbMetadataColumnStore extends _types_abstract_store_type__WEBPACK_IMPORTED_MODULE_0__.AbstractStore {}

/***/ }),

/***/ "./src/ydb/metadata/store/ydb-metadata-table.store.ts":
/*!************************************************************!*\
  !*** ./src/ydb/metadata/store/ydb-metadata-table.store.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YdbMetadataTableStore": () => (/* binding */ YdbMetadataTableStore)
/* harmony export */ });
/* harmony import */ var _types_abstract_store_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/abstract-store.type */ "./src/ydb/types/abstract-store.type.ts");

class YdbMetadataTableStore extends _types_abstract_store_type__WEBPACK_IMPORTED_MODULE_0__.AbstractStore {}

/***/ }),

/***/ "./src/ydb/metadata/table-metadata.ts":
/*!********************************************!*\
  !*** ./src/ydb/metadata/table-metadata.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableMetadata": () => (/* binding */ TableMetadata)
/* harmony export */ });
/* harmony import */ var _types_abstract_table_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/abstract-table.type */ "./src/ydb/types/abstract-table.type.ts");

class TableMetadata extends _types_abstract_table_type__WEBPACK_IMPORTED_MODULE_0__.AbstractTable {
  constructor(...args) {
    super(...args);
    this.columns = void 0;
    this.indices = void 0;
  }

}

/***/ }),

/***/ "./src/ydb/metadata/ydb-metadata.provider.ts":
/*!***************************************************!*\
  !*** ./src/ydb/metadata/ydb-metadata.provider.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YdbMetadata": () => (/* binding */ YdbMetadata)
/* harmony export */ });
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ydb_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ydb-sdk */ "ydb-sdk");
/* harmony import */ var ydb_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ydb_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ydb_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ydb.constant */ "./src/ydb/ydb.constant.ts");
/* harmony import */ var _entity_metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entity-metadata */ "./src/ydb/metadata/entity-metadata.ts");
/* harmony import */ var _store_ydb_metadata_column_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/ydb-metadata-column.store */ "./src/ydb/metadata/store/ydb-metadata-column.store.ts");
/* harmony import */ var _store_ydb_metadata_table_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/ydb-metadata-table.store */ "./src/ydb/metadata/store/ydb-metadata-table.store.ts");
var _dec, _dec2, _dec3, _dec4, _class;







let YdbMetadata = (_dec = (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_0__.Injectable)(), _dec2 = function (target, key) {
  return (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_0__.Inject)(_ydb_constant__WEBPACK_IMPORTED_MODULE_2__.CONNECTION_NAME)(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof ydb_sdk__WEBPACK_IMPORTED_MODULE_1__.Driver === "undefined" ? Object : ydb_sdk__WEBPACK_IMPORTED_MODULE_1__.Driver]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class YdbMetadata {
  constructor(connection) {
    this.connection = connection;
    this.entitiesMetadata = [];
  }

  build() {
    const tables = _store_ydb_metadata_table_store__WEBPACK_IMPORTED_MODULE_5__.YdbMetadataTableStore.get();
    this.entitiesMetadata = tables.map(table => this.createEntityMetadata(table));
  }

  createEntityMetadata(table) {
    const columns = _store_ydb_metadata_column_store__WEBPACK_IMPORTED_MODULE_4__.YdbMetadataColumnStore.get().filter(({
      target
    }) => target === table.target);
    return new _entity_metadata__WEBPACK_IMPORTED_MODULE_3__.EntityMetadata({
      connection: this.connection,
      table,
      columns
    });
  }

}) || _class) || _class) || _class) || _class);

/***/ }),

/***/ "./src/ydb/query-runner/query-runner.provider.ts":
/*!*******************************************************!*\
  !*** ./src/ydb/query-runner/query-runner.provider.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryRunner": () => (/* binding */ QueryRunner)
/* harmony export */ });
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ydb_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ydb-sdk */ "ydb-sdk");
/* harmony import */ var ydb_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ydb_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logger_logger_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logger/logger.provider */ "./src/ydb/logger/logger.provider.ts");
/* harmony import */ var _struct_table_column_struct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../struct/table-column.struct */ "./src/ydb/struct/table-column.struct.ts");
/* harmony import */ var _struct_table_index_struct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../struct/table-index.struct */ "./src/ydb/struct/table-index.struct.ts");
/* harmony import */ var _struct_table_struct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../struct/table.struct */ "./src/ydb/struct/table.struct.ts");
/* harmony import */ var _utils_primitive_ydb_type_to_local_type_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/primitive-ydb-type-to-local-type.util */ "./src/ydb/utils/primitive-ydb-type-to-local-type.util.ts");
/* harmony import */ var _ydb_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ydb.constant */ "./src/ydb/ydb.constant.ts");
var _dec, _dec2, _dec3, _dec4, _class;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









let QueryRunner = (_dec = (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_0__.Injectable)(), _dec2 = function (target, key) {
  return (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_0__.Inject)(_ydb_constant__WEBPACK_IMPORTED_MODULE_7__.CONNECTION_NAME)(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof ydb_sdk__WEBPACK_IMPORTED_MODULE_1__.Driver === "undefined" ? Object : ydb_sdk__WEBPACK_IMPORTED_MODULE_1__.Driver, typeof _logger_logger_provider__WEBPACK_IMPORTED_MODULE_2__.Logger === "undefined" ? Object : _logger_logger_provider__WEBPACK_IMPORTED_MODULE_2__.Logger]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class QueryRunner {
  constructor(driver, logger) {
    this.driver = driver;
    this.logger = logger;
    this.loadedTables = [];
  }

  async getTable(tableName) {
    this.loadedTables = await this.loadTables([tableName]);
    return this.loadedTables[0] ?? null;
  }

  async getTables(tableNames) {
    this.loadedTables = await this.loadTables(tableNames);
    return this.loadedTables;
  }

  async loadTables(tableNames) {
    if (tableNames?.length === 0) {
      return [];
    }

    const directoryListing = await this.driver.schemeClient.listDirectory("");
    let tablesEntry = directoryListing.children.filter(entity => entity.type === ydb_sdk__WEBPACK_IMPORTED_MODULE_1__.Ydb.Scheme.Entry.Type.TABLE);
    const {
      self: {
        name: databaseName
      }
    } = directoryListing;
    this.logger.logSchema(`Start scanning for database: ${databaseName}`);

    if (tableNames) {
      tablesEntry = tablesEntry.filter(({
        name
      }) => tableNames.includes(name));
    }

    this.logger.logSchema(`Found tables: ${tablesEntry.map(({
      name
    }) => name).join(", ")}`);

    if (tablesEntry.length === 0) {
      return [];
    }

    const session = await this.driver.tableClient.withSession(async sessionState => sessionState);
    return Promise.all(tablesEntry.map(async options => {
      const {
        name
      } = options;
      const table = new _struct_table_struct__WEBPACK_IMPORTED_MODULE_5__.Table(_objectSpread({}, options));
      const {
        columns,
        indexes,
        primaryKey
      } = await session.describeTable(name);
      this.logger.logSchema(`Describe table: ${name}`);
      table.columns = columns.map(columnMeta => {
        const isNullable = !!columnMeta.type?.optionalType?.item;
        const column = new _struct_table_column_struct__WEBPACK_IMPORTED_MODULE_3__.TableColumn({
          name: columnMeta.name,
          isNullable,
          isPrimary: primaryKey.length === 1 && primaryKey.includes(columnMeta.name),
          type: (0,_utils_primitive_ydb_type_to_local_type_util__WEBPACK_IMPORTED_MODULE_6__.primitiveYdbTypeToLocalType)(columnMeta.type?.optionalType?.item?.typeId) // TODO
          // isUnique
          // default

        });
        return column;
      });
      table.indices = indexes.map(indexMeta => {
        const index = new _struct_table_index_struct__WEBPACK_IMPORTED_MODULE_4__.TableIndex({
          indicesColumns: indexMeta.indexColumns,
          name: indexMeta.name
        });
        return index;
      });
      return table;
    }));
  }

}) || _class) || _class) || _class) || _class);

/***/ }),

/***/ "./src/ydb/struct/table-column.struct.ts":
/*!***********************************************!*\
  !*** ./src/ydb/struct/table-column.struct.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableColumn": () => (/* binding */ TableColumn)
/* harmony export */ });
/* harmony import */ var _types_abstract_column_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/abstract-column.type */ "./src/ydb/types/abstract-column.type.ts");

class TableColumn extends _types_abstract_column_type__WEBPACK_IMPORTED_MODULE_0__.AbstractColumn {
  static new(metadata) {
    const column = new TableColumn();
    return column;
  }

}

/***/ }),

/***/ "./src/ydb/struct/table-index.struct.ts":
/*!**********************************************!*\
  !*** ./src/ydb/struct/table-index.struct.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableIndex": () => (/* binding */ TableIndex)
/* harmony export */ });
/* harmony import */ var _types_abstract_index_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/abstract-index.type */ "./src/ydb/types/abstract-index.type.ts");

class TableIndex extends _types_abstract_index_type__WEBPACK_IMPORTED_MODULE_0__.AbstractIndex {}

/***/ }),

/***/ "./src/ydb/struct/table.struct.ts":
/*!****************************************!*\
  !*** ./src/ydb/struct/table.struct.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Table": () => (/* binding */ Table)
/* harmony export */ });
/* harmony import */ var _types_abstract_table_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/abstract-table.type */ "./src/ydb/types/abstract-table.type.ts");
/* harmony import */ var _table_column_struct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-column.struct */ "./src/ydb/struct/table-column.struct.ts");


class Table extends _types_abstract_table_type__WEBPACK_IMPORTED_MODULE_0__.AbstractTable {
  constructor(...args) {
    super(...args);
    this.columns = void 0;
    this.indices = void 0;
  }

  static new(metadata) {
    const table = new Table({
      name: metadata.name,
      target: metadata.tableMetadata.target,
      database: metadata.tableMetadata.database,
      owner: metadata.tableMetadata.owner,
      synchronize: metadata.synchronize
    });
    table.columns = metadata.tableMetadata.columns.map(columnMetadata => _table_column_struct__WEBPACK_IMPORTED_MODULE_1__.TableColumn["new"](columnMetadata));
    return table;
  }

  getDescription() {}

}

/***/ }),

/***/ "./src/ydb/types/abstract-column.type.ts":
/*!***********************************************!*\
  !*** ./src/ydb/types/abstract-column.type.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractColumn": () => (/* binding */ AbstractColumn)
/* harmony export */ });
class AbstractColumn {
  // isUnique = false;
  // default?: unknown;
  constructor(metadata) {
    this.name = void 0;
    this.isNullable = false;
    this.isPrimary = false;
    this.type = void 0;
    this.name = metadata?.name;
    this.isNullable = !!metadata?.isNullable;
    this.isPrimary = !!metadata?.isPrimary; // this.isUnique = !!options?.isUnique;
    // this.default = options?.default || "";

    this.type = metadata?.type;
  }

}

/***/ }),

/***/ "./src/ydb/types/abstract-index.type.ts":
/*!**********************************************!*\
  !*** ./src/ydb/types/abstract-index.type.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractIndex": () => (/* binding */ AbstractIndex)
/* harmony export */ });
class AbstractIndex {
  constructor(options) {
    this.indicesColumns = [];
    this.indicesColumns = options?.indicesColumns || [];
  }

}

/***/ }),

/***/ "./src/ydb/types/abstract-store.type.ts":
/*!**********************************************!*\
  !*** ./src/ydb/types/abstract-store.type.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractStore": () => (/* binding */ AbstractStore)
/* harmony export */ });
function _classPrivateFieldLooseBase(receiver, privateKey) { if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) { throw new TypeError("attempted to use private field on non-instance"); } return receiver; }

var id = 0;

function _classPrivateFieldLooseKey(name) { return "__private_" + id++ + "_" + name; }

var _data = /*#__PURE__*/_classPrivateFieldLooseKey("data");

class AbstractStore {
  static add(item) {
    _classPrivateFieldLooseBase(AbstractStore, _data)[_data].push(item);
  }

  static get() {
    return _classPrivateFieldLooseBase(AbstractStore, _data)[_data];
  }

}
Object.defineProperty(AbstractStore, _data, {
  writable: true,
  value: []
});

/***/ }),

/***/ "./src/ydb/types/abstract-table.type.ts":
/*!**********************************************!*\
  !*** ./src/ydb/types/abstract-table.type.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractTable": () => (/* binding */ AbstractTable)
/* harmony export */ });
class AbstractTable {
  constructor(options = {}) {
    this.options = options;
    this.columns = void 0;
    this.indices = void 0;
    this.name = void 0;
    this.database = void 0;
    this.target = void 0;
    this.owner = void 0;
    this.name = this.options?.name;
    this.database = this.options?.database;
    this.target = this.options?.target;
    this.owner = this.options?.owner;
  }

}

/***/ }),

/***/ "./src/ydb/utils/get-table-name.util.ts":
/*!**********************************************!*\
  !*** ./src/ydb/utils/get-table-name.util.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTableName": () => (/* binding */ getTableName)
/* harmony export */ });
function getTableName(entityName) {
  return entityName?.replace(/([a-z])([A-Z])/g, "$1 $2").replace(" ", "_").toLowerCase();
}

/***/ }),

/***/ "./src/ydb/utils/is-object.util.ts":
/*!*****************************************!*\
  !*** ./src/ydb/utils/is-object.util.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isObject": () => (/* binding */ isObject)
/* harmony export */ });
function isObject(value) {
  return value !== null && value?.toString() === "[object Object]";
}

/***/ }),

/***/ "./src/ydb/utils/primitive-ydb-type-to-local-type.util.ts":
/*!****************************************************************!*\
  !*** ./src/ydb/utils/primitive-ydb-type-to-local-type.util.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "primitiveYdbTypeToLocalType": () => (/* binding */ primitiveYdbTypeToLocalType)
/* harmony export */ });
/* harmony import */ var ydb_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ydb-sdk */ "ydb-sdk");
/* harmony import */ var ydb_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ydb_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_ydb_types_static_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/ydb-types-static.helper */ "./src/ydb/helpers/ydb-types-static.helper.ts");


function primitiveYdbTypeToLocalType(ydbType) {
  switch (ydbType) {
    case ydb_sdk__WEBPACK_IMPORTED_MODULE_0__.Ydb.Type.PrimitiveTypeId.PRIMITIVE_TYPE_ID_UNSPECIFIED:
      return null;

    case ydb_sdk__WEBPACK_IMPORTED_MODULE_0__.Ydb.Type.PrimitiveTypeId.BOOL:
      return _helpers_ydb_types_static_helper__WEBPACK_IMPORTED_MODULE_1__.YdbTypesStatic.Bool;

    case ydb_sdk__WEBPACK_IMPORTED_MODULE_0__.Ydb.Type.PrimitiveTypeId.INT8:
      return _helpers_ydb_types_static_helper__WEBPACK_IMPORTED_MODULE_1__.YdbTypesStatic.Int8;

    case ydb_sdk__WEBPACK_IMPORTED_MODULE_0__.Ydb.Type.PrimitiveTypeId.UINT8:
      return _helpers_ydb_types_static_helper__WEBPACK_IMPORTED_MODULE_1__.YdbTypesStatic.Uint8;

    case ydb_sdk__WEBPACK_IMPORTED_MODULE_0__.Ydb.Type.PrimitiveTypeId.INT16:
      return _helpers_ydb_types_static_helper__WEBPACK_IMPORTED_MODULE_1__.YdbTypesStatic.Int16;

    case ydb_sdk__WEBPACK_IMPORTED_MODULE_0__.Ydb.Type.PrimitiveTypeId.UINT16:
      return _helpers_ydb_types_static_helper__WEBPACK_IMPORTED_MODULE_1__.YdbTypesStatic.Uint16;

    case ydb_sdk__WEBPACK_IMPORTED_MODULE_0__.Ydb.Type.PrimitiveTypeId.INT32:
      return _helpers_ydb_types_static_helper__WEBPACK_IMPORTED_MODULE_1__.YdbTypesStatic.Int32;

    case ydb_sdk__WEBPACK_IMPORTED_MODULE_0__.Ydb.Type.PrimitiveTypeId.UINT32:
      return _helpers_ydb_types_static_helper__WEBPACK_IMPORTED_MODULE_1__.YdbTypesStatic.Uint32;

    case ydb_sdk__WEBPACK_IMPORTED_MODULE_0__.Ydb.Type.PrimitiveTypeId.INT64:
      return _helpers_ydb_types_static_helper__WEBPACK_IMPORTED_MODULE_1__.YdbTypesStatic.Int64;

    case ydb_sdk__WEBPACK_IMPORTED_MODULE_0__.Ydb.Type.PrimitiveTypeId.UINT64:
      return _helpers_ydb_types_static_helper__WEBPACK_IMPORTED_MODULE_1__.YdbTypesStatic.Uint64;

    case ydb_sdk__WEBPACK_IMPORTED_MODULE_0__.Ydb.Type.PrimitiveTypeId.FLOAT:
      return _helpers_ydb_types_static_helper__WEBPACK_IMPORTED_MODULE_1__.YdbTypesStatic.Float;

    case ydb_sdk__WEBPACK_IMPORTED_MODULE_0__.Ydb.Type.PrimitiveTypeId.DOUBLE:
      return _helpers_ydb_types_static_helper__WEBPACK_IMPORTED_MODULE_1__.YdbTypesStatic.Double;

    case ydb_sdk__WEBPACK_IMPORTED_MODULE_0__.Ydb.Type.PrimitiveTypeId.DATE:
      return _helpers_ydb_types_static_helper__WEBPACK_IMPORTED_MODULE_1__.YdbTypesStatic.Date;

    case ydb_sdk__WEBPACK_IMPORTED_MODULE_0__.Ydb.Type.PrimitiveTypeId.DATETIME:
      return _helpers_ydb_types_static_helper__WEBPACK_IMPORTED_MODULE_1__.YdbTypesStatic.Datetime;

    case ydb_sdk__WEBPACK_IMPORTED_MODULE_0__.Ydb.Type.PrimitiveTypeId.TIMESTAMP:
      return _helpers_ydb_types_static_helper__WEBPACK_IMPORTED_MODULE_1__.YdbTypesStatic.Timestamp;

    case ydb_sdk__WEBPACK_IMPORTED_MODULE_0__.Ydb.Type.PrimitiveTypeId.INTERVAL:
      return _helpers_ydb_types_static_helper__WEBPACK_IMPORTED_MODULE_1__.YdbTypesStatic.Interval;

    case ydb_sdk__WEBPACK_IMPORTED_MODULE_0__.Ydb.Type.PrimitiveTypeId.TZ_DATE:
      return _helpers_ydb_types_static_helper__WEBPACK_IMPORTED_MODULE_1__.YdbTypesStatic.TzDate;

    case ydb_sdk__WEBPACK_IMPORTED_MODULE_0__.Ydb.Type.PrimitiveTypeId.TZ_DATETIME:
      return _helpers_ydb_types_static_helper__WEBPACK_IMPORTED_MODULE_1__.YdbTypesStatic.TzDateTime;

    case ydb_sdk__WEBPACK_IMPORTED_MODULE_0__.Ydb.Type.PrimitiveTypeId.TZ_TIMESTAMP:
      return _helpers_ydb_types_static_helper__WEBPACK_IMPORTED_MODULE_1__.YdbTypesStatic.TzTimestamp;

    case ydb_sdk__WEBPACK_IMPORTED_MODULE_0__.Ydb.Type.PrimitiveTypeId.STRING:
      return _helpers_ydb_types_static_helper__WEBPACK_IMPORTED_MODULE_1__.YdbTypesStatic.String;

    case ydb_sdk__WEBPACK_IMPORTED_MODULE_0__.Ydb.Type.PrimitiveTypeId.UTF8:
      return _helpers_ydb_types_static_helper__WEBPACK_IMPORTED_MODULE_1__.YdbTypesStatic.Utf8;

    case ydb_sdk__WEBPACK_IMPORTED_MODULE_0__.Ydb.Type.PrimitiveTypeId.YSON:
      return _helpers_ydb_types_static_helper__WEBPACK_IMPORTED_MODULE_1__.YdbTypesStatic.Yson;

    case ydb_sdk__WEBPACK_IMPORTED_MODULE_0__.Ydb.Type.PrimitiveTypeId.JSON:
      return _helpers_ydb_types_static_helper__WEBPACK_IMPORTED_MODULE_1__.YdbTypesStatic.Json;

    case ydb_sdk__WEBPACK_IMPORTED_MODULE_0__.Ydb.Type.PrimitiveTypeId.UUID:
      return _helpers_ydb_types_static_helper__WEBPACK_IMPORTED_MODULE_1__.YdbTypesStatic.Uuid;

    case ydb_sdk__WEBPACK_IMPORTED_MODULE_0__.Ydb.Type.PrimitiveTypeId.JSON_DOCUMENT:
      return _helpers_ydb_types_static_helper__WEBPACK_IMPORTED_MODULE_1__.YdbTypesStatic.JsonDocument;

    case ydb_sdk__WEBPACK_IMPORTED_MODULE_0__.Ydb.Type.PrimitiveTypeId.DYNUMBER:
      return _helpers_ydb_types_static_helper__WEBPACK_IMPORTED_MODULE_1__.YdbTypesStatic.DyNumber;
  }
}

/***/ }),

/***/ "./src/ydb/ydb.constant.ts":
/*!*********************************!*\
  !*** ./src/ydb/ydb.constant.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONNECTION_NAME": () => (/* binding */ CONNECTION_NAME),
/* harmony export */   "DB_TIMEOUT": () => (/* binding */ DB_TIMEOUT)
/* harmony export */ });
const CONNECTION_NAME = "defaultConnection";
const DB_TIMEOUT = 10_000;

/***/ }),

/***/ "./src/ydb/ydb.module.ts":
/*!*******************************!*\
  !*** ./src/ydb/ydb.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YdbModule": () => (/* binding */ YdbModule)
/* harmony export */ });
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ydb_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ydb-sdk */ "ydb-sdk");
/* harmony import */ var ydb_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ydb_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _builder_ydb_builder_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./builder/ydb-builder.provider */ "./src/ydb/builder/ydb-builder.provider.ts");
/* harmony import */ var _logger_logger_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger/logger.provider */ "./src/ydb/logger/logger.provider.ts");
/* harmony import */ var _metadata_ydb_metadata_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metadata/ydb-metadata.provider */ "./src/ydb/metadata/ydb-metadata.provider.ts");
/* harmony import */ var _query_runner_query_runner_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./query-runner/query-runner.provider */ "./src/ydb/query-runner/query-runner.provider.ts");
/* harmony import */ var _ydb_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ydb.constant */ "./src/ydb/ydb.constant.ts");
var _dec, _dec2, _class;








let YdbModule = (_dec = (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_0__.Global)(), _dec2 = (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_0__.Module)({}), _dec(_class = _dec2(_class = class YdbModule {
  static forRoot(options) {
    const providers = [];
    const exports = [];
    const connectionProvider = {
      provide: _ydb_constant__WEBPACK_IMPORTED_MODULE_6__.CONNECTION_NAME,
      useFactory: async () => {
        const connection = await this.createConnection(options);
        return connection;
      }
    };
    const loggerFactory = {
      provide: _logger_logger_provider__WEBPACK_IMPORTED_MODULE_3__.Logger,
      useFactory: () => {
        const logger = new _logger_logger_provider__WEBPACK_IMPORTED_MODULE_3__.Logger(options.logger);
        return logger;
      }
    };
    providers.push(connectionProvider, loggerFactory, _query_runner_query_runner_provider__WEBPACK_IMPORTED_MODULE_5__.QueryRunner, _metadata_ydb_metadata_provider__WEBPACK_IMPORTED_MODULE_4__.YdbMetadata, _builder_ydb_builder_provider__WEBPACK_IMPORTED_MODULE_2__.YDbBuilder);
    exports.push(connectionProvider, loggerFactory, _query_runner_query_runner_provider__WEBPACK_IMPORTED_MODULE_5__.QueryRunner, _metadata_ydb_metadata_provider__WEBPACK_IMPORTED_MODULE_4__.YdbMetadata, _builder_ydb_builder_provider__WEBPACK_IMPORTED_MODULE_2__.YDbBuilder);
    return {
      module: YdbModule,
      providers,
      exports
    };
  }

  static forFeature(options) {
    // debugger
    return {
      module: YdbModule
    };
  }

  static async createConnection(options) {
    const {
      database,
      endpoint
    } = options;
    const driver = new ydb_sdk__WEBPACK_IMPORTED_MODULE_1__.Driver({
      database,
      endpoint,
      authService: new ydb_sdk__WEBPACK_IMPORTED_MODULE_1__.AnonymousAuthService()
    });

    if (!(await driver.ready(_ydb_constant__WEBPACK_IMPORTED_MODULE_6__.DB_TIMEOUT))) {
      console.error(`Driver has not become ready in ${_ydb_constant__WEBPACK_IMPORTED_MODULE_6__.DB_TIMEOUT}ms!`);
      throw new Error(`Driver has not become ready in ${_ydb_constant__WEBPACK_IMPORTED_MODULE_6__.DB_TIMEOUT}ms!`);
    } // await driver.tableClient.withSession(async (session) => {
    //     console.info(session);
    //     debugger
    //     // await createTable(session, logger);
    //     // await fillTableWithData(session, logger);
    // });
    // debugger


    return driver;
  }

}) || _class) || _class);

/***/ }),

/***/ "@nestjs/apollo":
/*!*********************************!*\
  !*** external "@nestjs/apollo" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/apollo");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/graphql":
/*!**********************************!*\
  !*** external "@nestjs/graphql" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/graphql");

/***/ }),

/***/ "@nestjs/platform-express":
/*!*******************************************!*\
  !*** external "@nestjs/platform-express" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");

/***/ }),

/***/ "aws-serverless-express":
/*!*****************************************!*\
  !*** external "aws-serverless-express" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("aws-serverless-express");

/***/ }),

/***/ "aws-serverless-express/middleware":
/*!****************************************************!*\
  !*** external "aws-serverless-express/middleware" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = require("aws-serverless-express/middleware");

/***/ }),

/***/ "cli-highlight":
/*!********************************!*\
  !*** external "cli-highlight" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cli-highlight");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/***/ ((module) => {

module.exports = require("debug");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "reflect-metadata":
/*!***********************************!*\
  !*** external "reflect-metadata" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("reflect-metadata");

/***/ }),

/***/ "ydb-sdk":
/*!**************************!*\
  !*** external "ydb-sdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("ydb-sdk");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./graphql.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handler": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reflect-metadata */ "reflect-metadata");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_platform_express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/platform-express */ "@nestjs/platform-express");
/* harmony import */ var _nestjs_platform_express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_platform_express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var aws_serverless_express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aws-serverless-express */ "aws-serverless-express");
/* harmony import */ var aws_serverless_express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aws_serverless_express__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_app_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/app.module */ "./src/app.module.ts");
/* harmony import */ var aws_serverless_express_middleware__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aws-serverless-express/middleware */ "aws-serverless-express/middleware");
/* harmony import */ var aws_serverless_express_middleware__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(aws_serverless_express_middleware__WEBPACK_IMPORTED_MODULE_6__);







let server;

async function bootstrap() {
  if (!server) {
    const app = express__WEBPACK_IMPORTED_MODULE_3___default()();
    const nest = await _nestjs_core__WEBPACK_IMPORTED_MODULE_1__.NestFactory.create(_src_app_module__WEBPACK_IMPORTED_MODULE_5__.AppModule, new _nestjs_platform_express__WEBPACK_IMPORTED_MODULE_2__.ExpressAdapter(app));
    nest.use((0,aws_serverless_express_middleware__WEBPACK_IMPORTED_MODULE_6__.eventContext)());
    await nest.init();
    server = (0,aws_serverless_express__WEBPACK_IMPORTED_MODULE_4__.createServer)(app, undefined, []);
  }

  return server;
}

const handler = async (event, context) => {
  server = await bootstrap();
  return (0,aws_serverless_express__WEBPACK_IMPORTED_MODULE_4__.proxy)(server, event, context, "PROMISE").promise; // return {
  //     statusCode: 200,
  //     body: "hello world!",
  // };
};
})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=graphql.js.map