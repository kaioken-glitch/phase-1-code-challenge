//function to calculate fare price per kilometer with a base fare
function calculateBodaFare(distanceInKm){
    //the base fare
    const baseFare = 50;

    //price charge per kilometer
    const chargePerKm = 15;
    
    //ditsance travelled cost based on input value
    const distanceTravelled = (distanceInKm * chargePerKm);

    //the total fare cost based on cost for distnace travelled and base fare
    const totalFare = baseFare + (distanceInKm * chargePerKm);

    //logs replies for each input value
    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${distanceTravelled}`);
    console.log(`Total: KES ${totalFare}`);
}

const distance = prompt('Unafika wapi Mkubwa? Kilometer ngapi?:');
// Convert the input to a number and call the function
calculateBodaFare(Number(distance));