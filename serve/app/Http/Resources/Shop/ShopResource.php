<?php

namespace App\Http\Resources\Shop;

use App\Http\Resources\Shop\Authenticate\AuthenticateResource;
use App\Models\Shop;
use Illuminate\Http\Resources\Json\JsonResource;

class ShopResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $shop_level = $this['level'];
        $level = null;
        if($shop_level){
            $level = [
                "level_name"=>$shop_level->level['level_name'],
                "pic_limit"=>$shop_level->level['pic_limit'],
                "item_limit"=>$shop_level->level['item_limit'],
                "domain_edit"=>$shop_level->level['domain_edit'],
                "exp_at"=>$shop_level['exp_at']
            ];
        }
        return [
            "shop_id"=>$this['id'],
            "shop_name"=>$this['shop_name'],
            "shop_url"=>"{$this['shop_url']}",
            "host"=>env("SHOP_HOST"),
            "status"=>Shop::shopStatusMap[$this['status']],
            "status_code"=>$this['status'],
            "active"=>$this['active'],
            "auto_close_in"=>$this['auto_close_in'],
            "auto_receive_in"=>$this['auto_receive_in'],
            "level"=>$level,
            "sms_amount"=>$this['sms_account']['amount'],
            "authenticate"=>new AuthenticateResource($this['authenticate'])
        ];
    }
}
