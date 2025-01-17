
import user from './user';
import shop from './shop';
import shopAssign from './shopAssign';
import shopVisit from './shopVisit';
import tposm from './tposm';
import bwu from './bwu';
import book from './book';
import stock from './stock';
import tposmItem from './tposmItem';
import stockItem from './stockItem';
import bwuItem from './bwuItem';

user.belongsToMany(shop, { through: 'shopAssign', as: 'shopAssignShops' });
shop.belongsToMany(user, { through: 'shopAssign', as: 'shopAssignUsers' });

shopAssign.hasMany(shopVisit);
shopVisit.belongsTo(shopAssign);

shopVisit.hasOne(tposm);
shopVisit.hasOne(bwu);
shopVisit.hasOne(book);
shopVisit.hasOne(stock);

tposm.belongsTo(shopVisit);
bwu.belongsTo(shopVisit);
book.belongsTo(shopVisit);
stock.belongsTo(shopVisit);

export {
  user,
  shop,
  shopAssign,
  shopVisit,
  tposm,
  bwu,
  book,
  stock,
  tposmItem,
  stockItem,
  bwuItem
};