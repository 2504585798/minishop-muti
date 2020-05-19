<?php

namespace App\Http\Controllers\Shop\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class WithdrawController extends Controller
{
    public function way_list()
    {
        $lists = [
            [
                "way"=>"alipay",
                "title"=>"支付宝"
            ],
//            [
//                "way"=>"wxpay",
//                "title"=>"微信"
//            ],
        ];
        return $this->jsonSuccessResponse($lists);
    }

    public function account_store(Request $request)
    {
        if(!$wallet = auth('users')->user()->wallet) return $this->jsonErrorResponse(404,"尚未创建钱包");
        $data = array();
        $way = $request->get('way');
        if(!in_array($way,['alipay','wxpay']))
            return $this->jsonErrorResponse(401,"方式代码不存在");
        $data['way'] = $way;
        $data['account'] = $request->get('account');
        $account = $wallet->accounts()->create($data);
        return $this->jsonSuccessResponse($account);
    }

    public function account_index()
    {
        $accounts = auth('users')->user()->wallet->accounts;
        return $this->jsonSuccessResponse($accounts);
    }

    public function account_destroy(Request $request)
    {
        $account = auth('users')->user()->wallet->accounts()->findOrFail($request->route()->parameter('account'));
        $account->delete();
        return $this->jsonSuccessResponse(null,"删除成功");
    }
}