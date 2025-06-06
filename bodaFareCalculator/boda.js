//function to calculate fare price per kilometer with a base fare
function calculateBodaFare(distanceInKm){

    //prompts user for a value 
    const distanceInKm = prompt('Unafika wapi Mkubwa? Kilometer ngapi?:');

    //the base fare
    const baseFare = 50;

    //price charge per kilometer
    const chargePerKm = 15;
    
    //ditsance travelled cost based on input value
    const distanceTravelled = (distanceInKm * chargePerKm);

    //the total fare cost based on cost for distnace travelled and base fare
    const totalFare = baseFare + (distanceInKm * chargePerKm);

    //logs replies for each input value
    comnsole.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${distanceTravelled}`);
    console.log(`Total: KES ${totalFare}`);
}