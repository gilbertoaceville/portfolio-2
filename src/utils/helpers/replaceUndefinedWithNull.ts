function replaceUndefinedWithNull<T extends {}>(obj: T): T {
	const updatedEntries = Object.entries(obj).map(([key, value]) => [
		key,
		value === undefined ? null : value,
	]);
	Object.assign(obj, Object.fromEntries(updatedEntries));

	return obj;
}

export default replaceUndefinedWithNull;
