function newItem(name) {
	exports[name] = (() => {
		let myItem = extend(Item, name, {});
		return myItem;
	})();
}
newItem("瓶装魔力")
newItem("铜铅合金")
newItem("魔力透镜")
newItem("临界燃煤")