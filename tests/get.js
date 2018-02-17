'use strict';

QUnit.module('Тестируем функцию get', function () {
	QUnit.test('get работает правильно c объектами с существующими свойствами', function (assert) {
		const object = {
			foo: 'bar',
			deep: {
				hested: {
					field: 'baz'
				}
			}
		};

		assert.strictEqual(get(object, '.foo'), object.foo);
		assert.strictEqual(get(object, '.deep.hested.field'), object.deep.hested.field);
		assert.strictEqual(get(object, '.deep.hested.field.length'), object.deep.hested.field.length);
		assert.deepEqual(get(object, '.deep.hested'), object.deep.hested);
		assert.deepEqual(get(object, '.deep'), object.deep);
		assert.deepEqual(get(object, '.'), object);
	});

	QUnit.test('get работает правильно c массивами', function (assert) {
		const object = {
			foo: 'bar',
			baz: [1, 2, 3],
			deep: [
				{foobar: '42'}
			]
		};

		assert.strictEqual(get(object, '.foo.0'), object.foo[0]);
		assert.strictEqual(get(object, '.foo.length'), object.foo.length);
		assert.strictEqual(get(object, '.baz.0'), object.baz[0]);
		assert.strictEqual(get(object, '.baz.length'), object.baz.length);
		assert.strictEqual(get(object, '.deep.0.foobar'), object.deep[0].foobar);
		assert.strictEqual(get(object, '.deep.0'), object.deep[0]);
	});

	QUnit.test('get работает правильно c объектами без свойств', function (assert) {
		const object = {
			foo: {
				bar: 42
			}
		};

		assert.strictEqual(get(object, '.foobar'), undefined);
		assert.strictEqual(get(object, '.foo.baz'), undefined);
		assert.strictEqual(get(object, '.baz.0'), undefined);
		assert.strictEqual(get(object, '.baz.length'), undefined);
		assert.strictEqual(get(object, '.0.1.2'), undefined);
		assert.strictEqual(get(object, '.deep.0'), undefined);		
	});
});
