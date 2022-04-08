class Point {
	constructor() {
		if (arguments.length === 0) {
			// default case
			this.x = 0;
			this.y = 0;
		}
		else if (arguments.length === 1) {
			if (arguments[0] instanceof Point) {
				// copy case
				const otherPoint = arguments[0];
				this.x = otherPoint.x;
				this.y = otherPoint.y;
			}
			else if (arguments[0] instanceof Array && arguments[0].length === 2) {
				// Get coordinates from an Array of 2 numbers.
				const coordinateArray = arguments[0];
				this.x = coordinateArray[0];
				this.y = coordinateArray[1];
			}
			else // don't fail silently.
				throw new Error('If 1 argument is passed, it must either be an Array or a Point.  Passed was: ' + arguments[0]);
		}
		else if (arguments.length === 2 && typeof arguments[0] === 'number' && typeof arguments[1] === 'number') {
			// initializing from 2 numbers
			this.x = arguments[0];
			this.y = arguments[1];
		}
		else
			throw new Error('Unsupported arguments passed to Point constructor');
	}
}
