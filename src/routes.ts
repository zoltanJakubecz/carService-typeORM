import { UserController } from "./controller/UserController";
import { CarController } from './controller/CarController';

export const Routes = [{
    method: "get",
    route: "/",
    controller: UserController,
    action: "all"
}, 
{
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, 
{
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, 
{
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
},
{
    method: "get",
    route: "/cars",
    controller: CarController,
    action: "all"
}];