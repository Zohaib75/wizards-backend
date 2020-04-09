import * as models from '../models';

let queryStr = `
CREATE OR REPLACE FUNCTION table_update_notify() RETURNS trigger AS $$
  BEGIN
    IF TG_OP = 'INSERT' then
      PERFORM pg_notify('table_update', '{"event":"' || TG_TABLE_NAME || '.created", "current": ' || row_to_json(NEW) || '}');
    ELSIF TG_OP = 'UPDATE' then
      PERFORM pg_notify('table_update', '{"event":"' || TG_TABLE_NAME || '.' || NEW.id || '.updated", "current": ' || row_to_json(NEW) || ', "previous": ' || row_to_json(OLD) || '}');
    ELSIF TG_OP = 'DELETE' then
      PERFORM pg_notify('table_update', '{"event":"' || TG_TABLE_NAME || '.deleted", "current": ' || row_to_json(OLD) || '}');
    END IF;
    RETURN NEW;
  END;
$$ LANGUAGE plpgsql;
`;

Object.keys(models).forEach((modelName) => {
  queryStr += `
DROP TRIGGER IF EXISTS ${modelName}_notify_update ON ${modelName}s;
CREATE TRIGGER ${modelName}_notify_update AFTER UPDATE ON ${modelName}s FOR EACH ROW EXECUTE PROCEDURE table_update_notify();

DROP TRIGGER IF EXISTS ${modelName}_notify_insert ON ${modelName}s;
CREATE TRIGGER ${modelName}_notify_insert AFTER INSERT ON ${modelName}s FOR EACH ROW EXECUTE PROCEDURE table_update_notify();

DROP TRIGGER IF EXISTS ${modelName}_notify_delete ON ${modelName}s;
CREATE TRIGGER ${modelName}_notify_delete AFTER DELETE ON ${modelName}s FOR EACH ROW EXECUTE PROCEDURE table_update_notify();
`;
});

export default queryStr;
