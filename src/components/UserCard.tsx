import { PenBox, Trash2 } from "lucide-react";
import { Button } from "./shadcnui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./shadcnui/card";

const UserCard = () => {
    
    return (
        <Card className="w-sm">
            <CardHeader>
                <CardTitle className="text-2xl text-center">Snigdha Dey</CardTitle>
                <CardDescription className="text-lg text-center">abc@gmail.com</CardDescription>
            </CardHeader>

            <CardFooter className="grid grid-cols-2 gap-4">
                <Button type="button" variant={"destructive"} size={"lg"} className="">
<Trash2/> Delete
                </Button>
                
 <Button type="button" variant={"secondary"} size={"lg"} className="">
<PenBox/> Edit
                </Button>

            </CardFooter>
        </Card>
    );
}

export default UserCard;