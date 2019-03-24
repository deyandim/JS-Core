function attachEventsListeners() {
    document.getElementById('convert').addEventListener('click', convert);
    let convertFrom = document.getElementById('inputUnits');
    let convertTo = document.getElementById('outputUnits');
    let inputDistance = document.getElementById('inputDistance');
    let outputDistance = document.getElementById('outputDistance');
    console.log(convertFrom.value);
    console.log(convertFrom[2].value);

    function convert() {
        // convertFrom.
        if(convertFrom.value === 'km'){
            if(convertTo.value === 'km'){
                outputDistance.value = inputDistance.value;
            }else if(convertTo.value === 'm'){
                outputDistance.value = inputDistance.value * 1000;
            }else if(convertTo.value === 'sm'){
                outputDistance.value = inputDistance.value * 1000 * 100;
            }else if(convertTo.value === 'mm'){
                outputDistance.value = inputDistance.value * 1000 * 1000;
            }else if(convertTo.value === 'mi'){
                outputDistance.value = inputDistance.value / 1.60934;
            }else if(convertTo.value === 'yrd'){
                outputDistance.value = inputDistance.value * 1000 / 0.9144;
            }else if(convertTo.value === 'ft'){
                outputDistance.value = inputDistance.value * 1000 / 0.3048;
            }else if(convertTo.value === 'in'){
                outputDistance.value = inputDistance.value * 1000 / 0.0254;
            }
        }else if(convertFrom.value === 'm'){
            if(convertTo.value === 'km'){
                outputDistance.value = inputDistance.value / 1000;
            }else if(convertTo.value === 'm'){
                outputDistance.value = inputDistance.value;
            }else if(convertTo.value === 'sm'){
                outputDistance.value = inputDistance.value * 100;
            }else if(convertTo.value === 'mm'){
                outputDistance.value = inputDistance.value * 1000;
            }else if(convertTo.value === 'mi'){
                outputDistance.value = inputDistance.value / 1609.34;
            }else if(convertTo.value === 'yrd'){
                outputDistance.value = inputDistance.value / 0.9144;
            }else if(convertTo.value === 'ft'){
                outputDistance.value = inputDistance.value / 0.3048;
            }else if(convertTo.value === 'in'){
                outputDistance.value = inputDistance.value / 0.0254;
            }
        }else if(convertFrom.value === 'sm'){
            if(convertTo.value === 'km'){
                outputDistance.value = inputDistance.value / 1000 / 100;
            }else if(convertTo.value === 'm'){
                outputDistance.value = inputDistance.value / 100;
            }else if(convertTo.value === 'sm'){
                outputDistance.value = inputDistance.value;
            }else if(convertTo.value === 'mm'){
                outputDistance.value = inputDistance.value * 10;
            }else if(convertTo.value === 'mi'){
                outputDistance.value = inputDistance.value / 100 / 1609.34;
            }else if(convertTo.value === 'yrd'){
                outputDistance.value = inputDistance.value / 100 / 0.9144;
            }else if(convertTo.value === 'ft'){
                outputDistance.value = inputDistance.value / 100 / 0.3048;
            }else if(convertTo.value === 'in'){
                outputDistance.value = inputDistance.value / 100 / 0.0254;
            }
        }else if(convertFrom.value === 'mm'){
            if(convertTo.value === 'km'){
                outputDistance.value = inputDistance.value / 1000 / 1000;
            }else if(convertTo.value === 'm'){
                outputDistance.value = inputDistance.value / 1000;
            }else if(convertTo.value === 'sm'){
                outputDistance.value = inputDistance.value / 10;
            }else if(convertTo.value === 'mm'){
                outputDistance.value = inputDistance.value;
            }else if(convertTo.value === 'mi'){
                outputDistance.value = inputDistance.value / 1000 / 1609.34;
            }else if(convertTo.value === 'yrd'){
                outputDistance.value = inputDistance.value / 1000 / 0.9144;
            }else if(convertTo.value === 'ft'){
                outputDistance.value = inputDistance.value / 1000 / 0.3048;
            }else if(convertTo.value === 'in'){
                outputDistance.value = inputDistance.value / 1000 / 0.0254;
            }
        }else if(convertFrom.value === 'mi'){
            if(convertTo.value === 'km'){
                outputDistance.value = inputDistance.value * 1.60934;
            }else if(convertTo.value === 'm'){
                outputDistance.value = inputDistance.value * 1609.34;
            }else if(convertTo.value === 'sm'){
                outputDistance.value = inputDistance.value * 1609.34 * 100;
            }else if(convertTo.value === 'mm'){
                outputDistance.value = inputDistance.value * 1609.34 * 1000;
            }else if(convertTo.value === 'mi'){
                outputDistance.value = inputDistance.value;
            }else if(convertTo.value === 'yrd'){
                outputDistance.value = inputDistance.value * 1609.34 / 0.9144;
            }else if(convertTo.value === 'ft'){
                outputDistance.value = inputDistance.value * 1609.34 / 0.3048;
            }else if(convertTo.value === 'in'){
                outputDistance.value = inputDistance.value * 1609.34 / 0.0254;
            }
        }else if(convertFrom.value === 'yrd'){
            if(convertTo.value === 'km'){
                outputDistance.value = inputDistance.value / 1000 / 0.9144;
            }else if(convertTo.value === 'm'){
                outputDistance.value = inputDistance.value / 0.9144;
            }else if(convertTo.value === 'sm'){
                outputDistance.value = inputDistance.value * 100 / 0.9144;
            }else if(convertTo.value === 'mm'){
                outputDistance.value = inputDistance.value * 1000 / 0.9144;
            }else if(convertTo.value === 'mi'){
                outputDistance.value = inputDistance.value / 1609.34 / 0.9144;
            }else if(convertTo.value === 'yrd'){
                outputDistance.value = inputDistance.value;
            }else if(convertTo.value === 'ft'){
                outputDistance.value = inputDistance.value / 0.3048 / 0.9144;
            }else if(convertTo.value === 'in'){
                outputDistance.value = inputDistance.value / 0.0254 / 0.9144;
            }
        }else if(convertFrom.value === 'ft'){
            if(convertTo.value === 'km'){
                outputDistance.value = inputDistance.value / 1000 * 0.3048;
            }else if(convertTo.value === 'm'){
                outputDistance.value = inputDistance.value * 0.3048;
            }else if(convertTo.value === 'sm'){
                outputDistance.value = inputDistance.value * 100 * 0.3048;
            }else if(convertTo.value === 'mm'){
                outputDistance.value = inputDistance.value * 1000 * 0.3048;
            }else if(convertTo.value === 'mi'){
                outputDistance.value = inputDistance.value / 1609.34 * 0.3048;
            }else if(convertTo.value === 'yrd'){
                outputDistance.value = inputDistance.value * 0.3048 / 0.9144;
            }else if(convertTo.value === 'ft'){
                outputDistance.value = inputDistance.value;
            }else if(convertTo.value === 'in'){
                outputDistance.value = inputDistance.value / 0.0254 * 0.3048;
            }
        }else if(convertFrom.value === 'in'){
            if(convertTo.value === 'km'){
                outputDistance.value = inputDistance.value / 1000 * 0.0254;
            }else if(convertTo.value === 'm'){
                outputDistance.value = inputDistance.value * 0.0254;
            }else if(convertTo.value === 'sm'){
                outputDistance.value = inputDistance.value * 100 * 0.0254;
            }else if(convertTo.value === 'mm'){
                outputDistance.value = inputDistance.value * 1000 * 0.0254;
            }else if(convertTo.value === 'mi'){
                outputDistance.value = inputDistance.value / 1609.34 * 0.0254;
            }else if(convertTo.value === 'yrd'){
                outputDistance.value = inputDistance.value * 0.9144 * 0.0254;
            }else if(convertTo.value === 'ft'){
                outputDistance.value = inputDistance.value * 0.3048 * 0.0254;
            }else if(convertTo.value === 'in'){
                outputDistance.value = inputDistance.value;
            }
        }
    }

}