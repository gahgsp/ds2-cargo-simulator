import { Euler, Quaternion } from "three"

export const FOV: number = 20

export const CENTER: [number, number, number] = [0, 0, 0]

export const TO_DELIVERIES_SHELF_ROTATION = new Quaternion().setFromEuler(new Euler(-0, 0, -0))

export const TO_LOST_CARGOS_SHELF_ROTATION = new Quaternion().setFromEuler(new Euler(-0, Math.PI, -0))  