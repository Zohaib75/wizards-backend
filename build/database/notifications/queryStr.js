"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var models = _interopRequireWildcard(require("../models"));

var queryStr = "\nCREATE OR REPLACE FUNCTION table_update_notify() RETURNS trigger AS $$\n  BEGIN\n    IF TG_OP = 'INSERT' then\n      PERFORM pg_notify('table_update', '{\"event\":\"' || TG_TABLE_NAME || '.created\", \"current\": ' || row_to_json(NEW) || '}');\n    ELSIF TG_OP = 'UPDATE' then\n      PERFORM pg_notify('table_update', '{\"event\":\"' || TG_TABLE_NAME || '.' || NEW.id || '.updated\", \"current\": ' || row_to_json(NEW) || ', \"previous\": ' || row_to_json(OLD) || '}');\n    ELSIF TG_OP = 'DELETE' then\n      PERFORM pg_notify('table_update', '{\"event\":\"' || TG_TABLE_NAME || '.deleted\", \"current\": ' || row_to_json(OLD) || '}');\n    END IF;\n    RETURN NEW;\n  END;\n$$ LANGUAGE plpgsql;\n";
Object.keys(models).forEach(function (modelName) {
  queryStr += "\nDROP TRIGGER IF EXISTS ".concat(modelName, "_notify_update ON ").concat(modelName, "s;\nCREATE TRIGGER ").concat(modelName, "_notify_update AFTER UPDATE ON ").concat(modelName, "s FOR EACH ROW EXECUTE PROCEDURE table_update_notify();\n\nDROP TRIGGER IF EXISTS ").concat(modelName, "_notify_insert ON ").concat(modelName, "s;\nCREATE TRIGGER ").concat(modelName, "_notify_insert AFTER INSERT ON ").concat(modelName, "s FOR EACH ROW EXECUTE PROCEDURE table_update_notify();\n\nDROP TRIGGER IF EXISTS ").concat(modelName, "_notify_delete ON ").concat(modelName, "s;\nCREATE TRIGGER ").concat(modelName, "_notify_delete AFTER DELETE ON ").concat(modelName, "s FOR EACH ROW EXECUTE PROCEDURE table_update_notify();\n");
});
var _default = queryStr;
exports["default"] = _default;
//# sourceMappingURL=queryStr.js.map