let blockingBlocks = [];

let loadBlocks = function () {

	for (let b of otherBlocks) {

		switch (b.type) {
			case 'cactus':

				let cactusModel = assets['cactus'].clone();
				cactusModel.position.set(
					b.gridX * -10,
					1,
					b.gridY * 10
				);

				cactusModel.blockType = 'cactus';

				blockingBlocks.push(cactusModel);

				scene.add(cactusModel);

				break;

			case 'invisible_blocking':

				let invisibleBlocking = assets['invisible_blocking'].clone();
				invisibleBlocking.position.set(
					b.gridX * -10,
					1,
					b.gridY * 10
				);

				invisibleBlocking.blockType = 'invisible_blocking';

				blockingBlocks.push(invisibleBlocking);

				scene.add(invisibleBlocking);

				break;

			case 'water_blocking':

				let waterBlocking = assets['invisible_blocking'].clone();
				waterBlocking.position.set(
					b.gridX * -10,
					1,
					b.gridY * 10
				);

				waterBlocking.blockType = 'water_blocking';

				blockingBlocks.push(waterBlocking);

				scene.add(waterBlocking);

				break;

			case 'station_blocking':

				let stationBlocking = assets['station'].clone();
				stationBlocking.position.set(
					b.gridX * -10,
					1,
					b.gridY * 10
				);

				stationBlocking.blockType = 'station_blocking';

				blockingBlocks.push(stationBlocking);

				scene.add(stationBlocking);

				break;

			case 'roadblock':

				let roadblockBlocking = assets['roadblock'].clone();
				roadblockBlocking.position.set(
					b.gridX * -10,
					1,
					b.gridY * 10
				);

				roadblockBlocking.blockType = 'roadblock';

				blockingBlocks.push(roadblockBlocking);

				scene.add(roadblockBlocking);

				break;

		}

	}

}



let otherBlocks = [


	// border --------------------------

	// right border
	{
		gridX: 14,
		gridY: 0,		
		type: 'invisible_blocking'
	},

	{
		gridX: 14,
		gridY: 1,		
		type: 'invisible_blocking'
	},

	{
		gridX: 14,
		gridY: 2,		
		type: 'invisible_blocking'
	},

	{
		gridX: 14,
		gridY: 3,		
		type: 'invisible_blocking'
	},

	{
		gridX: 14,
		gridY: 4,		
		type: 'invisible_blocking'
	},



	{
		gridX: 14,
		gridY: 5,		
		type: 'invisible_blocking'
	},

	{
		gridX: 14,
		gridY: 6,		
		type: 'invisible_blocking'
	},

	{
		gridX: 14,
		gridY: 7,		
		type: 'invisible_blocking'
	},

	{
		gridX: 14,
		gridY: 8,		
		type: 'invisible_blocking'
	},

	{
		gridX: 14,
		gridY: 9,		
		type: 'invisible_blocking'
	},


		{
		gridX: 14,
		gridY: 10,		
		type: 'invisible_blocking'
	},

	{
		gridX: 14,
		gridY: 11,		
		type: 'invisible_blocking'
	},

	{
		gridX: 14,
		gridY: 12,		
		type: 'invisible_blocking'
	},

	{
		gridX: 14,
		gridY: 13,		
		type: 'invisible_blocking'
	},

	{
		gridX: 14,
		gridY: 14,		
		type: 'invisible_blocking'
	},


		{
		gridX: 14,
		gridY: 15,		
		type: 'invisible_blocking'
	},

	{
		gridX: 14,
		gridY: 16,		
		type: 'invisible_blocking'
	},

	{
		gridX: 14,
		gridY: 17,		
		type: 'invisible_blocking'
	},

	{
		gridX: 14,
		gridY: 18,		
		type: 'invisible_blocking'
	},

	{
		gridX: 14,
		gridY: 19,		
		type: 'invisible_blocking'
	},


		{
		gridX: 14,
		gridY: 20,		
		type: 'invisible_blocking'
	},

	{
		gridX: 14,
		gridY: 21,		
		type: 'invisible_blocking'
	},

	{
		gridX: 14,
		gridY: 22,		
		type: 'invisible_blocking'
	},

	{
		gridX: 14,
		gridY: 23,		
		type: 'invisible_blocking'
	},

	{
		gridX: 14,
		gridY: 24,		
		type: 'invisible_blocking'
	},

		{
		gridX: 14,
		gridY: 25,		
		type: 'invisible_blocking'
	},

	{
		gridX: 14,
		gridY: 26,		
		type: 'invisible_blocking'
	},

	{
		gridX: 14,
		gridY: 27,		
		type: 'invisible_blocking'
	},

	{
		gridX: 14,
		gridY: 28,		
		type: 'invisible_blocking'
	},

	{
		gridX: 14,
		gridY: 29,		
		type: 'invisible_blocking'
	},

		{
		gridX: 14,
		gridY: 30,		
		type: 'invisible_blocking'
	},

	{
		gridX: 14,
		gridY: 31,		
		type: 'invisible_blocking'
	},

	{
		gridX: 14,
		gridY: 32,		
		type: 'invisible_blocking'
	},

	{
		gridX: 14,
		gridY: 33,		
		type: 'invisible_blocking'
	},

	{
		gridX: 14,
		gridY: 34,		
		type: 'invisible_blocking'
	},

		{
		gridX: 14,
		gridY: 35,		
		type: 'invisible_blocking'
	},

	{
		gridX: 14,
		gridY: 36,		
		type: 'invisible_blocking'
	},

	{
		gridX: 14,
		gridY: 37,		
		type: 'invisible_blocking'
	},

	{
		gridX: 14,
		gridY: 38,		
		type: 'invisible_blocking'
	},

	{
		gridX: 14,
		gridY: 39,		
		type: 'invisible_blocking'
	},



	{
		gridX: 14,
		gridY: 40,		
		type: 'invisible_blocking'
	},

	{
		gridX: 14,
		gridY: 41,		
		type: 'invisible_blocking'
	},

	{
		gridX: 14,
		gridY: 42,		
		type: 'invisible_blocking'
	},

	{
		gridX: 14,
		gridY: 43,		
		type: 'invisible_blocking'
	},

	{
		gridX: 14,
		gridY: 44,		
		type: 'invisible_blocking'
	},



	{
		gridX: 14,
		gridY: 45,		
		type: 'invisible_blocking'
	},

	{
		gridX: 14,
		gridY: 46,		
		type: 'invisible_blocking'
	},

	{
		gridX: 14,
		gridY: 47,		
		type: 'invisible_blocking'
	},

	{
		gridX: 14,
		gridY: 48,		
		type: 'invisible_blocking'
	},

	{
		gridX: 14,
		gridY: 49,		
		type: 'invisible_blocking'
	},

	{
		gridX: 14,
		gridY: 50,		
		type: 'invisible_blocking'
	},



	// left border
	{
		gridX: -15,
		gridY: 0,		
		type: 'invisible_blocking'
	},

	{
		gridX: -15,
		gridY: 1,		
		type: 'invisible_blocking'
	},

	{
		gridX: -15,
		gridY: 2,		
		type: 'invisible_blocking'
	},

	{
		gridX: -15,
		gridY: 3,		
		type: 'invisible_blocking'
	},

	{
		gridX: -15,
		gridY: 4,		
		type: 'invisible_blocking'
	},



	{
		gridX: -15,
		gridY: 5,		
		type: 'invisible_blocking'
	},

	{
		gridX: -15,
		gridY: 6,		
		type: 'invisible_blocking'
	},

	{
		gridX: -15,
		gridY: 7,		
		type: 'invisible_blocking'
	},

	{
		gridX: -15,
		gridY: 8,		
		type: 'invisible_blocking'
	},

	{
		gridX: -15,
		gridY: 9,		
		type: 'invisible_blocking'
	},


		{
		gridX: -15,
		gridY: 10,		
		type: 'invisible_blocking'
	},

	{
		gridX: -15,
		gridY: 11,		
		type: 'invisible_blocking'
	},

	{
		gridX: -15,
		gridY: 12,		
		type: 'invisible_blocking'
	},

	{
		gridX: -15,
		gridY: 13,		
		type: 'invisible_blocking'
	},

	{
		gridX: -15,
		gridY: 14,		
		type: 'invisible_blocking'
	},


		{
		gridX: -15,
		gridY: 15,		
		type: 'invisible_blocking'
	},

	{
		gridX: -15,
		gridY: 16,		
		type: 'invisible_blocking'
	},

	{
		gridX: -15,
		gridY: 17,		
		type: 'invisible_blocking'
	},

	{
		gridX: -15,
		gridY: 18,		
		type: 'invisible_blocking'
	},

	{
		gridX: -15,
		gridY: 19,		
		type: 'invisible_blocking'
	},


		{
		gridX: -15,
		gridY: 20,		
		type: 'invisible_blocking'
	},

	{
		gridX: -15,
		gridY: 21,		
		type: 'invisible_blocking'
	},

	{
		gridX: -15,
		gridY: 22,		
		type: 'invisible_blocking'
	},

	{
		gridX: -15,
		gridY: 23,		
		type: 'invisible_blocking'
	},

	{
		gridX: -15,
		gridY: 24,		
		type: 'invisible_blocking'
	},

		{
		gridX: -15,
		gridY: 25,		
		type: 'invisible_blocking'
	},

	{
		gridX: -15,
		gridY: 26,		
		type: 'invisible_blocking'
	},

	{
		gridX: -15,
		gridY: 27,		
		type: 'invisible_blocking'
	},

	{
		gridX: -15,
		gridY: 28,		
		type: 'invisible_blocking'
	},

	{
		gridX: -15,
		gridY: 29,		
		type: 'invisible_blocking'
	},

		{
		gridX: -15,
		gridY: 30,		
		type: 'invisible_blocking'
	},

	{
		gridX: -15,
		gridY: 31,		
		type: 'invisible_blocking'
	},

	{
		gridX: -15,
		gridY: 32,		
		type: 'invisible_blocking'
	},

	{
		gridX: -15,
		gridY: 33,		
		type: 'invisible_blocking'
	},

	{
		gridX: -15,
		gridY: 34,		
		type: 'invisible_blocking'
	},

		{
		gridX: -15,
		gridY: 35,		
		type: 'invisible_blocking'
	},

	{
		gridX: -15,
		gridY: 36,		
		type: 'invisible_blocking'
	},

	{
		gridX: -15,
		gridY: 37,		
		type: 'invisible_blocking'
	},

	{
		gridX: -15,
		gridY: 38,		
		type: 'invisible_blocking'
	},

	{
		gridX: -15,
		gridY: 39,		
		type: 'invisible_blocking'
	},



	{
		gridX: -15,
		gridY: 40,		
		type: 'invisible_blocking'
	},

	{
		gridX: -15,
		gridY: 41,		
		type: 'invisible_blocking'
	},

	{
		gridX: -15,
		gridY: 42,		
		type: 'invisible_blocking'
	},

	{
		gridX: -15,
		gridY: 43,		
		type: 'invisible_blocking'
	},

	{
		gridX: -15,
		gridY: 44,		
		type: 'invisible_blocking'
	},



	{
		gridX: -15,
		gridY: 45,		
		type: 'invisible_blocking'
	},

	{
		gridX: -15,
		gridY: 46,		
		type: 'invisible_blocking'
	},

	{
		gridX: -15,
		gridY: 47,		
		type: 'invisible_blocking'
	},

	{
		gridX: -15,
		gridY: 48,		
		type: 'invisible_blocking'
	},

	{
		gridX: -15,
		gridY: 49,		
		type: 'invisible_blocking'
	},

	{
		gridX: -15,
		gridY: 50,		
		type: 'invisible_blocking'
	},


	// water ------------------
	{
		gridX: -8,
		gridY: 26,		
		type: 'water_blocking'
	},


	{
		gridX: -9,
		gridY: 26,		
		type: 'water_blocking'
	},

	{
		gridX: -7,
		gridY: 27,		
		type: 'water_blocking'
	},

	{
		gridX: -8,
		gridY: 27,		
		type: 'water_blocking'
	},

	{
		gridX: -9,
		gridY: 27,		
		type: 'water_blocking'
	},


	{
		gridX: -7,
		gridY: 28,		
		type: 'water_blocking'
	},


	{
		gridX: -8,
		gridY: 28,		
		type: 'water_blocking'
	},

	{
		gridX: -9,
		gridY: 28,		
		type: 'water_blocking'
	},

	{
		gridX: -7,
		gridY: 29,		
		type: 'water_blocking'
	},

	{
		gridX: -8,
		gridY: 29,		
		type: 'water_blocking'
	},


	{
		gridX: -9,
		gridY: 29,		
		type: 'water_blocking'
	},


	{
		gridX: -8,
		gridY: 30,		
		type: 'water_blocking'
	},

	{
		gridX: -9,
		gridY: 30,		
		type: 'water_blocking'
	},

	{
		gridX: -8,
		gridY: 31,		
		type: 'water_blocking'
	},

	{
		gridX: -9,
		gridY: 31,		
		type: 'water_blocking'
	},

	{
		gridX: -10,
		gridY: 26,		
		type: 'water_blocking'
	},

	{
		gridX: -10,
		gridY: 27,		
		type: 'water_blocking'
	},

	{
		gridX: -10,
		gridY: 28,		
		type: 'water_blocking'
	},

	{
		gridX: -10,
		gridY: 29,		
		type: 'water_blocking'
	},

	{
		gridX: -10,
		gridY: 30,		
		type: 'water_blocking'
	},

	{
		gridX: -10,
		gridY: 31,		
		type: 'water_blocking'
	},



	{
		gridX: 9,
		gridY: 26,		
		type: 'water_blocking'
	},


	{
		gridX: 8,
		gridY: 27,		
		type: 'water_blocking'
	},

	{
		gridX: 9,
		gridY: 27,		
		type: 'water_blocking'
	},

	{
		gridX: 8,
		gridY: 28,		
		type: 'water_blocking'
	},

	{
		gridX: 9,
		gridY: 28,		
		type: 'water_blocking'
	},



	{
		gridX: 8,
		gridY: 29,		
		type: 'water_blocking'
	},


	{
		gridX: 9,
		gridY: 29,		
		type: 'water_blocking'
	},

	{
		gridX: 7,
		gridY: 30,		
		type: 'water_blocking'
	},

	{
		gridX: 8,
		gridY: 30,		
		type: 'water_blocking'
	},

	{
		gridX: 9,
		gridY: 30,		
		type: 'water_blocking'
	},




	{
		gridX: 7,
		gridY: 31,		
		type: 'water_blocking'
	},


	{
		gridX: 8,
		gridY: 31,		
		type: 'water_blocking'
	},

	{
		gridX: 9,
		gridY: 31,		
		type: 'water_blocking'
	},

	{
		gridX: 7,
		gridY: 32,		
		type: 'water_blocking'
	},

	{
		gridX: 8,
		gridY: 32,		
		type: 'water_blocking'
	},




	{
		gridX: 9,
		gridY: 32,		
		type: 'water_blocking'
	},


	{
		gridX: 7,
		gridY: 33,		
		type: 'water_blocking'
	},

	{
		gridX: 8,
		gridY: 33,		
		type: 'water_blocking'
	},

	{
		gridX: 7,
		gridY: 34,		
		type: 'water_blocking'
	},

	{
		gridX: 8,
		gridY: 34,		
		type: 'water_blocking'
	},









	{
		gridX: -10,
		gridY: 43,		
		type: 'water_blocking'
	},


	{
		gridX: -9,
		gridY: 43,		
		type: 'water_blocking'
	},

	{
		gridX: -8,
		gridY: 43,		
		type: 'water_blocking'
	},

	{
		gridX: -7,
		gridY: 43,		
		type: 'water_blocking'
	},

	{
		gridX: -6,
		gridY: 43,		
		type: 'water_blocking'
	},



	{
		gridX: -5,
		gridY: 43,		
		type: 'water_blocking'
	},


	{
		gridX: -4,
		gridY: 43,		
		type: 'water_blocking'
	},

	{
		gridX: -3,
		gridY: 43,		
		type: 'water_blocking'
	},

	{
		gridX: -2,
		gridY: 43,		
		type: 'water_blocking'
	},

	{
		gridX: -1,
		gridY: 43,		
		type: 'water_blocking'
	},


		{
		gridX: 0,
		gridY: 43,		
		type: 'water_blocking'
	},


	{
		gridX: 1,
		gridY: 43,		
		type: 'water_blocking'
	},

	{
		gridX: 2,
		gridY: 43,		
		type: 'water_blocking'
	},

	{
		gridX: 3,
		gridY: 43,		
		type: 'water_blocking'
	},

	{
		gridX: 4,
		gridY: 43,		
		type: 'water_blocking'
	},
	





	{
		gridX: -10,
		gridY: 44,		
		type: 'water_blocking'
	},


	{
		gridX: -9,
		gridY: 44,		
		type: 'water_blocking'
	},

	{
		gridX: -8,
		gridY: 44,		
		type: 'water_blocking'
	},

	{
		gridX: -7,
		gridY: 44,		
		type: 'water_blocking'
	},

	{
		gridX: -6,
		gridY: 44,		
		type: 'water_blocking'
	},



	{
		gridX: -5,
		gridY: 44,		
		type: 'water_blocking'
	},


	{
		gridX: -4,
		gridY: 44,		
		type: 'water_blocking'
	},

	{
		gridX: -3,
		gridY: 44,		
		type: 'water_blocking'
	},

	{
		gridX: -2,
		gridY: 44,		
		type: 'water_blocking'
	},

	{
		gridX: -1,
		gridY: 44,		
		type: 'water_blocking'
	},


		{
		gridX: 0,
		gridY: 44,		
		type: 'water_blocking'
	},


	{
		gridX: 1,
		gridY: 44,		
		type: 'water_blocking'
	},

	{
		gridX: 2,
		gridY: 44,		
		type: 'water_blocking'
	},

	{
		gridX: 3,
		gridY: 44,		
		type: 'water_blocking'
	},

	{
		gridX: 4,
		gridY: 44,		
		type: 'water_blocking'
	},
	

	{
		gridX: -10,
		gridY: 45,		
		type: 'water_blocking'
	},


	{
		gridX: -9,
		gridY: 45,		
		type: 'water_blocking'
	},


// end--------------------
	{
		gridX: -14,
		gridY: 53,		
		type: 'invisible_blocking'
	},

	{
		gridX: -13,
		gridY: 53,		
		type: 'invisible_blocking'
	},

	{
		gridX: -12,
		gridY: 53,		
		type: 'invisible_blocking'
	},


	{
		gridX: -11,
		gridY: 53,		
		type: 'invisible_blocking'
	},

	{
		gridX: -10,
		gridY: 53,		
		type: 'invisible_blocking'
	},

	{
		gridX: -9,
		gridY: 53,		
		type: 'invisible_blocking'
	},

	{
		gridX: -8,
		gridY: 53,		
		type: 'invisible_blocking'
	},


	{
		gridX: -7,
		gridY: 53,		
		type: 'invisible_blocking'
	},

	{
		gridX: -6,
		gridY: 53,		
		type: 'invisible_blocking'
	},

	{
		gridX: -5,
		gridY: 53,		
		type: 'invisible_blocking'
	},


	{
		gridX: -4,
		gridY: 53,		
		type: 'invisible_blocking'
	},

	{
		gridX: -3,
		gridY: 53,		
		type: 'invisible_blocking'
	},

	{
		gridX: -2,
		gridY: 53,		
		type: 'invisible_blocking'
	},


	{
		gridX: -0,
		gridY: 53,		
		type: 'invisible_blocking'
	},

	{
		gridX: 1,
		gridY: 53,		
		type: 'invisible_blocking'
	},

	{
		gridX: 2,
		gridY: 53,		
		type: 'invisible_blocking'
	},


	{
		gridX: 3,
		gridY: 53,		
		type: 'invisible_blocking'
	},

	{
		gridX: 4,
		gridY: 53,		
		type: 'invisible_blocking'
	},

	{
		gridX: 5,
		gridY: 53,		
		type: 'invisible_blocking'
	},


	{
		gridX: 6,
		gridY: 53,		
		type: 'invisible_blocking'
	},

	{
		gridX: 7,
		gridY: 53,		
		type: 'invisible_blocking'
	},

	{
		gridX: 8,
		gridY: 53,		
		type: 'invisible_blocking'
	},


	{
		gridX: 9,
		gridY: 53,		
		type: 'invisible_blocking'
	},

	{
		gridX: 10,
		gridY: 53,		
		type: 'invisible_blocking'
	},

	{
		gridX: 11,
		gridY: 53,		
		type: 'invisible_blocking'
	},


	{
		gridX: 12,
		gridY: 53,		
		type: 'invisible_blocking'
	},

	{
		gridX: 13,
		gridY: 53,		
		type: 'invisible_blocking'
	},

	{
		gridX: 14,
		gridY: 53,		
		type: 'invisible_blocking'
	},

// start--------------------
	{
		gridX: -14,
		gridY: 0,		
		type: 'invisible_blocking'
	},

	{
		gridX: -13,
		gridY: 0,		
		type: 'invisible_blocking'
	},

	{
		gridX: -12,
		gridY: 0,		
		type: 'invisible_blocking'
	},


	{
		gridX: -11,
		gridY: 0,		
		type: 'invisible_blocking'
	},

	{
		gridX: -10,
		gridY: 0,		
		type: 'invisible_blocking'
	},

	{
		gridX: -9,
		gridY: 53,		
		type: 'invisible_blocking'
	},

	{
		gridX: -8,
		gridY: 0,		
		type: 'invisible_blocking'
	},


	{
		gridX: -7,
		gridY: 0,		
		type: 'invisible_blocking'
	},

	{
		gridX: -6,
		gridY: 0,		
		type: 'invisible_blocking'
	},

	{
		gridX: -5,
		gridY: 0,		
		type: 'invisible_blocking'
	},


	{
		gridX: -4,
		gridY: 0,		
		type: 'invisible_blocking'
	},

	{
		gridX: -3,
		gridY: 0,		
		type: 'invisible_blocking'
	},

	{
		gridX: -2,
		gridY: 0,		
		type: 'invisible_blocking'
	},

	{
		gridX: -1,
		gridY: 0,		
		type: 'invisible_blocking'
	},

	{
		gridX: 0,
		gridY: 0,		
		type: 'invisible_blocking'
	},

	{
		gridX: 1,
		gridY: 0,		
		type: 'invisible_blocking'
	},

	{
		gridX: 2,
		gridY: 0,		
		type: 'invisible_blocking'
	},


	{
		gridX: 3,
		gridY: 0,		
		type: 'invisible_blocking'
	},

	{
		gridX: 4,
		gridY: 0,		
		type: 'invisible_blocking'
	},

	{
		gridX: 5,
		gridY: 0,		
		type: 'invisible_blocking'
	},


	{
		gridX: 6,
		gridY: 0,		
		type: 'invisible_blocking'
	},

	{
		gridX: 7,
		gridY: 0,		
		type: 'invisible_blocking'
	},

	{
		gridX: 8,
		gridY: 0,		
		type: 'invisible_blocking'
	},


	{
		gridX: 9,
		gridY: 0,		
		type: 'invisible_blocking'
	},

	{
		gridX: 10,
		gridY: 0,		
		type: 'invisible_blocking'
	},

	{
		gridX: 11,
		gridY: 0,		
		type: 'invisible_blocking'
	},


	{
		gridX: 12,
		gridY: 0,		
		type: 'invisible_blocking'
	},

	{
		gridX: 13,
		gridY: 0,		
		type: 'invisible_blocking'
	},

	{
		gridX: 14,
		gridY: 0,		
		type: 'invisible_blocking'
	},


// station ------------------
	{
		gridX: 5,
		gridY: 49,		
		type: 'station_blocking'
	},

	{
		gridX: 6,
		gridY: 49,		
		type: 'invisible_blocking'
	},

	{
		gridX: 5,
		gridY: 50,		
		type: 'invisible_blocking'
	},

	{
		gridX: 6,
		gridY: 50,		
		type: 'invisible_blocking'
	},

// stone -----------------------
	{
		gridX: -11,
		gridY: 7,		
		type: 'invisible_blocking'
	},

	{
		gridX: -10,
		gridY: 7,		
		type: 'invisible_blocking'
	},

	{
		gridX: -9,
		gridY: 7,		
		type: 'invisible_blocking'
	},

	{
		gridX: -10,
		gridY: 8,		
		type: 'invisible_blocking'
	},

	{
		gridX: -9,
		gridY: 8,		
		type: 'invisible_blocking'
	},

	{
		gridX: 9,
		gridY: 11,		
		type: 'invisible_blocking'
	},

	{
		gridX: 10,
		gridY: 11,		
		type: 'invisible_blocking'
	},

	{
		gridX: 11,
		gridY: 11,		
		type: 'invisible_blocking'
	},

	{
		gridX: 2,
		gridY: 20,		
		type: 'invisible_blocking'
	},

	{
		gridX: 3,
		gridY: 20,		
		type:
		 'invisible_blocking'
	},

	{
		gridX: 4,
		gridY: 20,		
		type: 'invisible_blocking'
	},

	{
		gridX: 3,
		gridY: 21,		
		type: 'invisible_blocking'
	},

	{
		gridX: 4,
		gridY: 21,		
		type: 'invisible_blocking'
	},


// ----------------
	// road block

	{
		gridX: 2,
		gridY: 5,		
		type: 'roadblock'
	},


	{
		gridX: 1,
		gridY: 14,		
		type: 'roadblock'
	},


	{
		gridX: -5,
		gridY: 23,		
		type: 'roadblock'
	},


	{
		gridX: -5,
		gridY: 23,		
		type: 'roadblock'
	},


	{
		gridX: -5,
		gridY: 23,		
		type: 'roadblock'
	},


	{
		gridX: 3,
		gridY: 29,		
		type: 'roadblock'
	},

	{
		gridX: -6,
		gridY: 36,		
		type: 'roadblock'
	},

	{
		gridX: -7,
		gridY: 47,		
		type: 'roadblock'
	},



// ----------------------

// cactus

	{
		gridX: 2,
		gridY: 6,		
		type: 'cactus'
	},

	{
		gridX: -4,
		gridY: 13,		
		type: 'cactus'
	},

	{
		gridX: -4,
		gridY: 14,		
		type: 'cactus'
	},

	{
		gridX: -3,
		gridY: 13,		
		type: 'cactus'
	},

	{
		gridX: -3,
		gridY: 14,		
		type: 'cactus'
	},

	{
		gridX: -1,
		gridY: 24,		
		type: 'cactus'
	},


	{
		gridX: -1,
		gridY: 25,		
		type: 'cactus'
	},


	{
		gridX: 0,
		gridY: 24,		
		type: 'cactus'
	},


	{
		gridX: 0,
		gridY: 25,		
		type: 'cactus'
	},

	{
		gridX: 2,
		gridY: 33,		
		type: 'cactus'
	},

	{
		gridX: 2,
		gridY: 34,		
		type: 'cactus'
	},

	{
		gridX: 0,
		gridY: 35,		
		type: 'cactus'
	},


	{
		gridX: 0,
		gridY: 35,		
		type: 'cactus'
	},

	{
		gridX: -6,
		gridY: 47,		
		type: 'cactus'
	},

	{
		gridX: -5,
		gridY: 47,		
		type: 'cactus'
	},


	{
		gridX: -4,
		gridY: 47,		
		type: 'cactus'
	},


	{
		gridX: -3,
		gridY: 47,		
		type: 'cactus'
	},



/*
	{
		gridX: ,
		gridY: ,		
		type: 'water_blocking'
	},

	{
		gridX: ,
		gridY: ,		
		type: 'water_blocking'
	},

*/

	// test --------------------
	// {
	// 	gridX: 3,
	// 	gridY: 3,		
	// 	type: 'invisible_blocking'
	// },

	// {
	// 	gridX: -3,
	// 	gridY: 3,		
	// 	type: 'invisible_blocking'
	// },


];


// assets['invisible_blocking']

/*
	{
		gridX: 0,
		gridY: 1,		
		isCactus: true,
		
	}
*/

/*

	x: +/- 13  

	y: 50

*/

